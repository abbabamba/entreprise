import React, { useState } from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ title, description, image, features, advantages, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.productDetailOverlay}>
      <div className={styles.productDetailContent}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        
        <div className={styles.productImageContainer}>
          {!imageLoaded && <div className={styles.imagePlaceholder}>Chargement...</div>}
          <img
            src={image}
            alt={title}
            className={styles.productImage}
            style={{ display: imageLoaded ? 'block' : 'none' }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>{title}</h2>
          <p className={styles.productDescription}>{description}</p>

          <div className={styles.productDetails}>
            <div className={styles.detailSection}>
              <h3>Caractéristiques :</h3>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.detailSection}>
              <h3>Avantages :</h3>
              <ul>
                {advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </div>
          </div>

          <button className={styles.contactButton}>Contactez-nous pour un devis</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;