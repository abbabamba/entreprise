import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

const About = () => {
  const [currentService, setCurrentService] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { icon: 'iconConstruction', title: 'BTP et Construction', description: 'Expertise dans les projets d\'infrastructure' },
    { icon: 'iconEnergy', title: 'Énergies Renouvelables', description: 'Solutions solaires et forages écologiques' },
    { icon: 'iconAgriculture', title: 'Agriculture Moderne', description: 'Matériels agricoles de pointe' },
  ];

  const features = [
    'Distributeur officiel CHETAK en Afrique de l\'Ouest',
    'Garantie sur tous nos équipements',
    'Service après-vente dédié',
    'Expertise en mécanique agricole',
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className={styles.about}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
    >
      <div className={styles.container}>
        <motion.h1 className={styles.title} variants={containerVariants}>SOGEPI AFRIQUE SARL</motion.h1>
        <motion.h2 className={styles.subtitle} variants={containerVariants}>Votre partenaire multi-services au Sénégal</motion.h2>
        <motion.p className={styles.description} variants={containerVariants}>
          Fondée en 2022, SOGEPI AFRIQUE SARL est le leader sénégalais dans les domaines du BTP,
          de l'agriculture moderne et de la distribution de matériels innovants.
          Notre engagement : des services de qualité à des prix compétitifs.
        </motion.p>
        <motion.div className={styles.services} variants={containerVariants}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.serviceItem} ${currentService === index ? styles.active : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <i className={`${styles.icon} ${styles[service.icon]}`} aria-hidden="true"></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className={styles.features} variants={containerVariants}>
          <h3>Nos Atouts</h3>
          <ul>
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={containerVariants}>
          <Link to="/products" className={styles.cta}>Découvrir nos produits</Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
