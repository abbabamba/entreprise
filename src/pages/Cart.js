import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styles from './Cart.module.css';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, setCart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'cart_bancaire',
  });

  useEffect(() => {
    console.log("Cart items:", cart);
  }, [cart]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g, '')) : item.price;
      return total + (price * item.quantity || 0);
    }, 0);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      Swal.fire({
        title: 'Erreur',
        text: 'Votre panier est vide. Ajoutez des produits avant de passer commande.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const to = "abakarae313@gmail.com";
    const subject = "Nouvelle commande";
    const emailMessage = `
      Nom : ${orderDetails.name}
      Email : ${orderDetails.email}
      Adresse : ${orderDetails.address}
      Méthode de paiement : ${orderDetails.paymentMethod}

      Produits commandés :
      ${cart.map(item => `${item.title} - Quantité: ${item.quantity} - Prix: ${item.price}`).join('\n')}

      Total : ${getTotalPrice().toFixed(2)}€
    `;

    try {
      const response = await fetch('https://codingmailer.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: to,
          subject: subject,
          message: emailMessage,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Succès',
          text: 'Commande envoyée avec succès. Notre équipe vous contactera pour finaliser la commande.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setCart([]);
        setShowOrderForm(false);
        setOrderDetails({
          name: '',
          email: '',
          address: '',
          paymentMethod: 'cart_bancaire',
        });
      } else {
        const data = await response.json();
        Swal.fire({
          title: 'Erreur',
          text: data.message || 'Erreur lors de l\'envoi de la commande.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      Swal.fire({
        title: 'Erreur',
        text: 'Erreur lors de la requête : ' + error,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className={styles.cartPage}>
      <h2 className={styles.cartTitle}>Votre Panier</h2>
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Votre panier est vide.</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cart.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                <div className={styles.cartItemDetails}>
                  <h4>{item.title}</h4>
                  <p className={styles.itemPrice}>Prix: {item.price}</p>
                  <div className={styles.quantityControl}>
                    <button 
                      onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                      className={styles.quantityInput}
                    />
                    <button 
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item)} className={styles.removeButton}>
                  &times;
                </button>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <p className={styles.totalPrice}>Total: {getTotalPrice().toFixed(2)}€</p>
            <button 
              onClick={() => setShowOrderForm(true)} 
              className={styles.orderButton}
              disabled={cart.length === 0}
            >
              Passer la commande
            </button>
          </div>
        </div>
      )}

      {showOrderForm && (
        <div className={styles.orderFormOverlay}>
          <div className={styles.orderForm}>
            <h3>Détails de la commande</h3>
            <form onSubmit={handleOrderSubmit}>
              <input 
                type="text" 
                placeholder="Nom"
                value={orderDetails.name}
                onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                required
              />
              <input 
                type="email" 
                placeholder="Email"
                value={orderDetails.email}
                onChange={(e) => setOrderDetails({ ...orderDetails, email: e.target.value })}
                required
              />
              <textarea 
                placeholder="Adresse"
                value={orderDetails.address}
                onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                required
              />
              <select
                value={orderDetails.paymentMethod}
                onChange={(e) => setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })}
              >
                <option value="cart_bancaire">Carte bancaire</option>
                <option value="orange_money">Orange Money</option>
                <option value="wave">Wave</option>
                <option value="paypal">PayPal</option>
              </select>
              <div className={styles.formButtons}>
                <button type="button" onClick={() => setShowOrderForm(false)} className={styles.cancelButton}>
                  Annuler
                </button>
                <button type="submit" className={styles.submitButton}>Soumettre</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;