import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useContext(CartContext);

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
            <li><Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`} onClick={() => scrollToSection('banner')}>Accueil</Link></li>
            <li><Link to="/" className={styles.navLink} onClick={() => scrollToSection('about')}>À propos</Link></li>
            <li><Link to="/" className={styles.navLink} onClick={() => scrollToSection('services')}>Services</Link></li>
            <li><Link to="/products" className={`${styles.navLink} ${location.pathname === '/products' ? styles.active : ''}`}>Produits</Link></li>
            <li><Link to="/contact" className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}>Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.iconContainer}>
          <Link to="/cart" className={styles.cartIcon}>
            <ShoppingCart size={24} />
            {cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
          </Link>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className={styles.headerBackground}></div>
    </header>
  );
};

export default Header;
