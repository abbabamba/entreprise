import React, { useState } from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ title, description, image, features, advantages, price, onClose, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.productDetailOverlay}>
      <div className={styles.productDetail}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={title}
            className={`${styles.productImage} ${imageLoaded ? styles.loaded : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && <div className={styles.imagePlaceholder} />}
        </div>
        <div className={styles.productInfo}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.details}>
            <div className={styles.detailSection}>
              <h4>Caractéristiques :</h4>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className={styles.detailSection}>
              <h4>Avantages :</h4>
              <ul>
                {advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.priceAndAction}>
            <p className={styles.price}>{price}</p>
            <button className={styles.addToCartButton} onClick={onAddToCart}>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;