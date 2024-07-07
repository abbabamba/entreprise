import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import styles from './Products.module.css';
import Swal from 'sweetalert2';

// Import images and define products array as before

import drillingRigImg from '../assets/drilling_rig.jpeg';
import miniTractorImg from '../assets/minitractorImg.jpeg';
import motorCultivatorImg from '../assets/motorCultivator.jpeg';
import pulverisateurImg from '../assets/Pulvérisateur.jpeg';
import riceMillingMachineImg from '../assets/rice_milling_machine.jpeg';
import tractorsImg from '../assets/tractors.jpeg';
import waterPumpingSystemImg from '../assets/water_pumping_system.jpeg';

// Define products array
const products = [
  {
    title: "Forage et mini-forages solaires",
    description: "Nous réalisons des installations de forage et mini-forages solaires pour vos besoins en eau.",
    image: drillingRigImg,
    features: ["Technologie solaire", "Installation rapide", "Durabilité"],
    advantages: ["Accès à l'eau potable", "Énergie renouvelable", "Coût d'exploitation réduit"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Mini-tracteurs",
    description: "Vente de mini-tracteurs adaptés à toutes les tailles d'exploitation agricole.",
    image: miniTractorImg,
    features: ["Compact et puissant", "Facile à manœuvrer", "Efficacité accrue"],
    advantages: ["Augmentation de la productivité", "Réduction des efforts manuels", "Maintenance facile"],
    price: "À partir de 3000€",
  },
  {
    title: "Motoculteurs",
    description: "Une gamme de motoculteurs pour l'entretien de vos terrains agricoles.",
    image: motorCultivatorImg,
    features: ["Polyvalent", "Facilité d'utilisation", "Robuste"],
    advantages: ["Préparation efficace du sol", "Réduction des efforts physiques", "Longue durée de vie"],
    price: "À partir de 800€",
  },
  {
    title: "Pulvérisateurs",
    description: "Nous offrons une variété de pulvérisateurs pour vos besoins agricoles.",
    image: pulverisateurImg,
    features: ["Grande capacité", "Uniformité de pulvérisation", "Facilité de transport"],
    advantages: ["Augmentation des rendements", "Réduction de la consommation de produits chimiques", "Durabilité"],
    price: "À partir de 500€",
  },
  {
    title: "Machines à moudre le riz",
    description: "Nos machines à moudre le riz sont efficaces et durables.",
    image: riceMillingMachineImg,
    features: ["Grande capacité", "Faible consommation d'énergie", "Facilité d'utilisation"],
    advantages: ["Amélioration de la qualité du riz", "Réduction des pertes", "Productivité accrue"],
    price: "À partir de 1500€",
  },
  {
    title: "Tracteurs",
    description: "Nous vendons des tracteurs de différentes tailles et puissances pour vos besoins agricoles.",
    image: tractorsImg,
    features: ["Haute puissance", "Confort de conduite", "Technologie moderne"],
    advantages: ["Efficacité accrue", "Réduction des temps de travail", "Longue durée de vie"],
    price: "À partir de 5000€",
  },
  {
    title: "Systèmes de pompage d'eau",
    description: "Nous proposons des systèmes de pompage d'eau pour une utilisation agricole et domestique.",
    image: waterPumpingSystemImg,
    features: ["Efficacité énergétique", "Durabilité", "Facilité d'installation"],
    advantages: ["Accès constant à l'eau", "Réduction des coûts énergétiques", "Maintenance facile"],
    price: "Contactez-nous pour un devis",
  },
];


const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'card'
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.title !== productToRemove.title));
  };

  const updateQuantity = (product, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.title === product.title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

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
        confirmButtonText: 'OK'
      });
      return;
    }
    
    const to = "abakarae313@gmail.com"; // Replace with your email
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
          text: 'Commande envoyée avec succès. Notre équipe vous appellera pour finaliser la commande.' ,
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setCart([]);
        setShowOrderForm(false);
        setOrderDetails({
          name: '',
          email: '',
          address: '',
          paymentMethod: 'card'
        });
      } else {
        const data = await response.json();
        Swal.fire({
          title: 'Erreur',
          text: data.message || 'Erreur lors de l\'envoi de la commande.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.log('Erreur lors de la requête :', error);
      Swal.fire({
        title: 'Erreur',
        text: 'Erreur lors de la requête : ' + error,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className={styles.productsPage}>
      <div className={styles.productsHeader}>
    <h2>Nos Produits et Services</h2>
    <button onClick={() => setShowCart(!showCart)} className={styles.cartButton}>
      {showCart ? 'Masquer le panier' : 'Afficher le panier'} ({cart.length})
    </button>
  </div>
      
      {showCart && (
        <div className={styles.cart}>
          <h3>Votre Panier</h3>
          {cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <h4>{item.title}</h4>
                <p>Prix: {item.price}</p>
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                  className={styles.quantityInput}
                />
              </div>
              <button onClick={() => removeFromCart(item)} className={styles.removeButton}>Supprimer</button>
            </div>
          ))}
          <p className={styles.totalPrice}>Total: {getTotalPrice().toFixed(2)}€</p>
          <button 
            onClick={() => setShowOrderForm(true)} 
            className={styles.orderButton}
            disabled={cart.length === 0}
          >
            Passer la commande
          </button>
        </div>
      )}

      {showOrderForm && (
        <div className={styles.orderForm}>
          <h3>Détails de la commande</h3>
          <form onSubmit={handleOrderSubmit}>
            <input 
              type="text" 
              placeholder="Nom"
              value={orderDetails.name}
              onChange={(e) => setOrderDetails({...orderDetails, name: e.target.value})}
              required
            />
            <input 
              type="email" 
              placeholder="Email"
              value={orderDetails.email}
              onChange={(e) => setOrderDetails({...orderDetails, email: e.target.value})}
              required
            />
            <textarea 
              placeholder="Adresse"
              value={orderDetails.address}
              onChange={(e) => setOrderDetails({...orderDetails, address: e.target.value})}
              required
            />
            <select
              value={orderDetails.paymentMethod}
              onChange={(e) => setOrderDetails({...orderDetails, paymentMethod: e.target.value})}
            >
              <option value="cart_bancaire">Carte bancaire</option>
              <option value="virement_bancaire">Virement bancaire</option>
              <option value="wave">wave</option>
              <option value="orange_money">Orange money</option>
            </select>
            <button type="submit" className={styles.submitOrderButton}>
              Confirmer la commande
            </button>
          </form>
        </div>
      )}

      {selectedProduct ? (
        <ProductDetail
          title={selectedProduct.title}
          description={selectedProduct.description}
          image={selectedProduct.image}
          features={selectedProduct.features}
          advantages={selectedProduct.advantages}
          price={selectedProduct.price}
          onClose={handleClose}
          onAddToCart={() => addToCart(selectedProduct)}
          className={styles.productDetail}
        />
      ) : (
        <div className={styles.productList}>
          {products.map((product, index) => (
            <div key={index} className={styles.productItem} onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }} className={styles.addToCartButton}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;


