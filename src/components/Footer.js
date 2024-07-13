import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const contactInfo = [
    { icon: Phone, text: "+221 77 606 29 00 / 77 512 30 76" },
    { icon: Mail, text: "sogepiafriquesarl@gmail.com" },
    { icon: MapPin, text: "Dakar (Sénégal) Route de Rufisque km 11, Route de Rufisque Thiaroye sur Mer" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/WLbdrA6EssHd35kk/?mibextid=LQQJ4d" },
    { icon: Instagram, href: "https://www.instagram.com/sogepi_afrique_sarl?igsh=YXk3YXp0OXA3MDlz&utm_source=qr" },
  ];

 

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
          {contactInfo.map((info, index) => (
            <motion.div key={index} className={styles.info} whileHover={{ scale: 1.05 }}>
              <info.icon size={20} />
              <span>{info.text}</span>
            </motion.div>
          ))}
        </div>
        <div className={styles.socialLinks}>
          <h3 className={styles.title}>Suivez-nous</h3>
          <div className={styles.socialIcons}>
            {socialLinks.map((social, index) => (
              <motion.a key={index} href={social.href} className={styles.socialIcon} whileHover={{ scale: 1.2 }}>
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 SGPI Afrique S.A.R.L. Tous droits réservés.</p>
      </div>
     
    </footer>
  );
};

export default Footer;