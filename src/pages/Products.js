import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import ProductDetail from '../components/ProductDetail';
import styles from './Products.module.css';
import Swal from 'sweetalert2';

import drillingRigImg from '../assets/drilling_rig.jpeg';
import miniTractorImg from '../assets/minitractorImg.jpeg';
import motorCultivatorImg from '../assets/motorCultivator.jpeg';
import pulverisateurImg from '../assets/Pulvérisateur.jpeg';
import riceMillingMachineImg from '../assets/rice_milling_machine.jpeg';
import tractorsImg from '../assets/tractors.jpeg';
import waterPumpingSystemImg from '../assets/water_pumping_system.jpeg';

const convertEuroToCFA = (priceInEuro) => {
  const conversionRate = 655.957;
  return priceInEuro * conversionRate;
};

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
    price: `À partir de ${convertEuroToCFA(3000).toFixed(0)} CFA`,
  },
  {
    title: "Motoculteurs",
    description: "Une gamme de motoculteurs pour l'entretien de vos terrains agricoles.",
    image: motorCultivatorImg,
    features: ["Polyvalent", "Facilité d'utilisation", "Robuste"],
    advantages: ["Préparation efficace du sol", "Réduction des efforts physiques", "Longue durée de vie"],
    price: `À partir de ${convertEuroToCFA(800).toFixed(0)} CFA`,
  },
  {
    title: "Pulvérisateurs",
    description: "Nous offrons une variété de pulvérisateurs pour vos besoins agricoles.",
    image: pulverisateurImg,
    features: ["Grande capacité", "Uniformité de pulvérisation", "Facilité de transport"],
    advantages: ["Augmentation des rendements", "Réduction de la consommation de produits chimiques", "Durabilité"],
    price: `À partir de ${convertEuroToCFA(500).toFixed(0)} CFA`,
  },
  {
    title: "Machines à moudre le riz",
    description: "Nos machines à moudre le riz sont efficaces et durables.",
    image: riceMillingMachineImg,
    features: ["Grande capacité", "Faible consommation d'énergie", "Facilité d'utilisation"],
    advantages: ["Amélioration de la qualité du riz", "Réduction des pertes", "Productivité accrue"],
    price: `À partir de ${convertEuroToCFA(1500).toFixed(0)} CFA`,
  },
  {
    title: "Tracteurs",
    description: "Nous vendons des tracteurs de différentes tailles et puissances pour vos besoins agricoles.",
    image: tractorsImg,
    features: ["Haute puissance", "Confort de conduite", "Technologie moderne"],
    advantages: ["Efficacité accrue", "Réduction des temps de travail", "Longue durée de vie"],
    price: `À partir de ${convertEuroToCFA(5000).toFixed(0)} CFA`,
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
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      title: 'Produit ajouté !',
      text: `${product.title} a été ajouté à votre panier.`,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Voir le panier',
      cancelButtonText: 'Continuer les achats',
      customClass: {
        container: styles.swalContainer,
        popup: styles.swalPopup,
        title: styles.swalTitle,
        content: styles.swalContent,
        confirmButton: styles.swalConfirmButton,
        cancelButton: styles.swalCancelButton
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/cart');
      }
    });
  };

  return (
    <div className={styles.productsPage}>
      <div className={styles.productsHeader}>
        <h2>Nos Produits et Services</h2>
        <button onClick={() => navigate('/cart')} className={styles.cartButton}>
          Voir le panier ({cart.length})
        </button>
      </div>
      
      {selectedProduct ? (
        <ProductDetail
          title={selectedProduct.title}
          description={selectedProduct.description}
          image={selectedProduct.image}
          features={selectedProduct.features}
          advantages={selectedProduct.advantages}
          price={selectedProduct.price}
          onClose={handleClose}
          onAddToCart={() => handleAddToCart(selectedProduct)}
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
                handleAddToCart(product);
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
