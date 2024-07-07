import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [location, scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img src={logo1} alt="Logo SGPI Afrique" className={styles.logo} />
          <img src={logo2} alt="Logo Chetak Sénégal" className={styles.logo} />
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li><Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>Accueil</Link></li>
            <li><Link to="/products" className={`${styles.navLink} ${location.pathname === '/products' ? styles.active : ''}`}>Produits</Link></li>
            <li><Link to="/contact" className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}>Contact</Link></li>
          </ul>
        </nav>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={styles.headerBackground}></div>
    </header>
  );
};

export default Header;