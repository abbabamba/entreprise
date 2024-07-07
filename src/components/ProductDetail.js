import React from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ title, description, image, features, advantages, price, onClose }) => {
  return (
    <div className={styles.productDetail}>
      <button onClick={onClose}>Retour</button>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>Caractéristiques :</h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h4>Avantages :</h4>
      <ul>
        {advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

export default ProductDetail;
