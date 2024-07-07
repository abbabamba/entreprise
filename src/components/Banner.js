import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.css';
import drillingRigImg from '../assets/drilling_rig.jpeg';
import miniTractorImg from '../assets/minitractorImg.jpeg';
import motorCultivatorImg from '../assets/motorCultivator.jpeg';
import pulverisateurImg from '../assets/Pulvérisateur.jpeg';
import riceMillingMachineImg from '../assets/rice_milling_machine.jpeg';
import tractorsImg from '../assets/tractors.jpeg';
import waterPumpingSystemImg from '../assets/water_pumping_system.jpeg';

const images = [
  { src: drillingRigImg, alt: 'Foreuse', description: 'Équipements de forage de haute qualité' },
  { src: miniTractorImg, alt: 'Mini Tracteur', description: 'Tracteurs compacts pour tous types de terrains' },
  { src: motorCultivatorImg, alt: 'Motoculteur', description: 'Outils de jardinage puissants et efficaces' },
  { src: pulverisateurImg, alt: 'Pulvérisateur', description: 'Systèmes de pulvérisation précis pour l\'agriculture' },
  { src: riceMillingMachineImg, alt: 'Machine à décortiquer le riz', description: 'Équipements modernes pour le traitement du riz' },
  { src: tractorsImg, alt: 'Tracteurs', description: 'Large gamme de tracteurs pour tous vos besoins agricoles' },
  { src: waterPumpingSystemImg, alt: 'Système de pompage d\'eau', description: 'Solutions de pompage d\'eau efficaces et durables' },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    accessibility: true,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.banner}>
      <Slider {...settings} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image.src} alt={image.alt} className={styles.image} />
            <div className={styles.caption}>
              <h2>{image.alt}</h2>
              <p>{image.description}</p>
              <Link 
                to={`/produits/${image.alt.toLowerCase().replace(/\s+/g, '-')}`} 
                className={styles.cta}
              >
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
