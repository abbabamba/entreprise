import React from 'react';
import styles from './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bienvenue chez SGPI Afrique S.A.R.L</h1>
        <h2 className={styles.subtitle}>Société Générale de Prestations et d'Investissement</h2>
        <p className={styles.description}>
          Nous offrons une gamme complète de services dans les domaines de la construction, 
          des énergies renouvelables, de l'agriculture et bien plus encore.
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <i className={`${styles.icon} ${styles.iconConstruction}`}></i>
            <h3>Construction</h3>
          </div>
          <div className={styles.serviceItem}>
            <i className={`${styles.icon} ${styles.iconEnergy}`}></i>
            <h3>Énergies Renouvelables</h3>
          </div>
          <div className={styles.serviceItem}>
            <i className={`${styles.icon} ${styles.iconAgriculture}`}></i>
            <h3>Agriculture</h3>
          </div>
        </div>
        <Link to="/products" className={styles.cta}>Voir nos produits</Link> 
      </div>
    </section>
  );
};

export default About;
