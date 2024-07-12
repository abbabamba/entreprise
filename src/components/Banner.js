import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

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
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToSlide = useCallback((index) => {
    if (sliderRef) {
      sliderRef.slickGoTo(index);
    }
  }, [sliderRef]);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToSlide(index);
    }
  }, [goToSlide]);

  useEffect(() => {
    const handleKeyboardNavigation = (e) => {
      if (e.key === 'ArrowLeft') {
        sliderRef.slickPrev();
      } else if (e.key === 'ArrowRight') {
        sliderRef.slickNext();
      }
    };

    document.addEventListener('keydown', handleKeyboardNavigation);
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [sliderRef]);

  return (
    <div className={styles.banner}>
      <Slider ref={setSliderRef} {...settings} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image.src} alt={image.alt} className={styles.image} />
            <div className={styles.caption}>
              <h2>{image.alt}</h2>
              <p>{image.description}</p>
              <button className={styles.cta}>En savoir plus</button>
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-label={`Aller à la diapositive ${index + 1}: ${image.alt}`}
            tabIndex={0}
          >
            <img src={image.src} alt={`Miniature ${image.alt}`} />
          </button>
        ))}
      </div>
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={() => sliderRef.slickPrev()} aria-label="Diapositive précédente">
        <ChevronLeft />
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={() => sliderRef.slickNext()} aria-label="Diapositive suivante">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Banner;