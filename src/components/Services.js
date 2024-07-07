import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: "Vente et installation de panneaux solaires",
    icon: "☀️",
    description: "Équipements solaires et installations complètes"
  },
  {
    title: "Vente de tracteurs et mini-tracteurs",
    icon: "🚜",
    description: "Matériel agricole adapté à tous les besoins"
  },
  {
    title: "Installation d'assainissement",
    icon: "🚰",
    description: "Solutions d'assainissement modernes et efficaces"
  },
  {
    title: "Motoculteurs",
    icon: "🌱",
    description: "Outils de jardinage et d'agriculture de précision"
  },
  {
    title: "Fabrication de matériels agricoles",
    icon: "🛠️",
    description: "Équipements sur mesure pour l'agriculture et l'agroalimentaire"
  },
  {
    title: "Distribution de motopompes",
    icon: "💧",
    description: "Motopompes et groupes électrogènes performants"
  },
  {
    title: "Installation de forages solaires",
    icon: "🕳️",
    description: "Forages et mini-forages alimentés à l'énergie solaire"
  },
  {
    title: "Fournitures diverses",
    icon: "📦",
    description: "Tout le matériel nécessaire pour vos projets"
  }
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nos Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
        <button className={styles.cta}>Contactez-nous</button>
      </div>
    </section>
  );
};

export default Services;
