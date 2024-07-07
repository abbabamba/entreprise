import React from 'react';
import styles from './Footer.module.css';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3 className={styles.title}>Contactez-nous</h3>
          <p className={styles.info}><Phone size={18} /> +221 77 606 29 00 / 77 512 30 76</p>
          <p className={styles.info}><Mail size={18} /> sogepiafriquesarl@gmail.com</p>
          <p className={styles.info}><MapPin size={18} /> Dakar (Sénégal) Route de Rufisque km 11, Route de Rufisque Thiaroye sur Mer</p>
        </div>
        <div className={styles.socialLinks}>
          <h3 className={styles.title}>Suivez-nous</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}><Facebook size={24} /></a>
            <a href="#" className={styles.socialIcon}><Instagram size={24} /></a>
            <a href="#" className={styles.socialIcon}><Twitter size={24} /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 SGPI Afrique S.A.R.L. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;