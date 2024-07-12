import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>SOGEPI AFRIQUE SARL - Votre partenaire multi-services au Sénégal</h1>
      <p>Découvrez notre expertise en BTP, agriculture moderne, énergies renouvelables et distribution de matériels professionnels.</p>
      <div className={styles.highlights}>
        <div className={styles.highlight}>
          <h2>BTP et Construction</h2>
          <p>Solutions complètes pour vos projets de construction</p>
        </div>
        <div className={styles.highlight}>
          <h2>Agriculture Moderne</h2>
          <p>Matériels agricoles et agroalimentaires de pointe</p>
        </div>
        <div className={styles.highlight}>
          <h2>Énergies Renouvelables</h2>
          <p>Installations solaires et forages écologiques</p>
        </div>
      </div>
      <Link to="/about" className={styles.cta}>En savoir plus sur SOGEPI AFRIQUE</Link>
    </div>
  );
};

export default Home;