import React, { useState, useMemo } from 'react';
import ProductDetail from '../components/ProductDetail';
import styles from './Products.module.css';

// Importez ici toutes les images nécessaires
import drillingRigImg from '../assets/drilling_rig.jpeg';
import miniTractorImg from '../assets/minitractorImg.jpeg';
import motorCultivatorImg from '../assets/motorCultivator.jpeg';
import pulverisateurImg from '../assets/Pulvérisateur.jpeg';
import silentOpenGeneratorImg from '../assets/unknow.jpeg';
import generatorSetImg from '../assets/Generator_set.jpeg';
import moulinMilImg from '../assets/Moulin_mil.jpeg';
import elevatorRegulatorImg from '../assets/Composants_élévateu_ régulateur.jpeg';
import submersiblePumpImg from '../assets/submersiblePump.jpeg';
import ms285Img from '../assets/ms285.png';
import deltaForageImg from '../assets/Delta_Forage.jpeg';
import tunalarMotorImg from '../assets/Tunalar_Pancar_Motor.jpeg';
import farmDiscHarrowImg from '../assets/fermeHerse.jpeg';
import riceMillingMachineImg from '../assets/rice_milling_machine.jpeg';
import tractorsImg from '../assets/tractors.jpeg';
import waterPumpingSystemImg from '../assets/water_pumping_system.jpeg';
import pompeImmergeeImg from '../assets/pompe_immergee.jpeg';
import pompeImmergeeImg7_5kw from '../assets/pompe_immergee7_5kw.jpg';
import panneauSolaireImg from '../assets/panneau_solaire.jpg';
import moulinCerealeImg from '../assets/moulin_cereale.jpeg';
import decortiqueuseRizImg from '../assets/decortiqueuse_riz.jpg';
import groupeElectrogeneImg from '../assets/groupe_electrogene.jpg';
import productDemoVideo from '../assets/product_demo.mp4';


const products = [
  {
    title: "Forage et mini-forages solaires",
    description: "Nous réalisons des installations de forage et mini-forages solaires pour vos besoins en eau.",
    image: drillingRigImg,
    features: ["Technologie solaire", "Installation rapide", "Durabilité"],
    advantages: ["Accès à l'eau potable", "Énergie renouvelable", "Coût d'exploitation réduit"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Mini-tracteurs",
    description: "Vente de mini-tracteurs adaptés à toutes les tailles d'exploitation agricole.",
    image: miniTractorImg,
    features: ["Compact et puissant", "Facile à manœuvrer", "Efficacité accrue"],
    advantages: ["Augmentation de la productivité", "Réduction des efforts manuels", "Maintenance facile"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Silent Open Generator",
    description: "Générateur silencieux pour des applications résidentielles ou industrielles.",
    image: silentOpenGeneratorImg,
    features: ["Silencieux", "Faible consommation", "Haute puissance"],
    advantages: ["Économie d'énergie", "Nuisance sonore réduite", "Longue durée de vie"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Manufacturer of Generator Set",
    description: "Générateur robuste et fiable pour diverses applications.",
    image: generatorSetImg,
    features: ["Fiable", "Efficace", "Facile à entretenir"],
    advantages: ["Forte puissance", "Adapté à différentes industries", "Durabilité"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Moulin à mil",
    description: "Machine de transformation du mil pour les exploitations agricoles.",
    image: moulinMilImg,
    features: ["Efficace", "Robuste", "Facilité d'utilisation"],
    advantages: ["Transformation rapide", "Réduction de la main-d'œuvre", "Résistant à l'usure"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Composants de sécurité de l′élévateur - Régulateur de survitesse",
    description: "Régulateur de vitesse pour élévateurs professionnels, garantissant la sécurité.",
    image: elevatorRegulatorImg,
    features: ["Sécurité accrue", "Installation facile", "Normes professionnelles"],
    advantages: ["Protection contre les excès de vitesse", "Durabilité", "Fiabilité"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Pompe submersible pour puits 4SS4/32",
    description: "Pompe submersible puissante pour l'extraction d'eau.",
    image: submersiblePumpImg,
    features: ["Puissance de 3kW", "Sortie 1 1/4 pouces", "380V"],
    advantages: ["Extraction d'eau rapide", "Énergie optimisée", "Haute performance"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "MS 285 Classic",
    description: "Tracteur classique offrant de hautes performances pour l'agriculture.",
    image: ms285Img,
    features: ["Robuste", "Facile à manœuvrer", "Puissance élevée"],
    advantages: ["Augmentation de la productivité", "Durabilité", "Maintenance facile"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Delta Forage",
    description: "Matériel de forage de haute qualité pour exploitation agricole.",
    image: deltaForageImg,
    features: ["Technologie avancée", "Efficacité accrue", "Robuste"],
    advantages: ["Durabilité", "Facilité d'utilisation", "Performances élevées"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Tunalar Pancar Motor",
    description: "Moteur spécialisé pour les applications agricoles.",
    image: tunalarMotorImg,
    features: ["Fiabilité", "Faible consommation", "Puissant"],
    advantages: ["Longue durée de vie", "Coût d'exploitation réduit", "Maintenance aisée"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Tracteur de ferme herse à disques",
    description: "Herse à disques pour le labourage des champs agricoles.",
    image: farmDiscHarrowImg,
    features: ["Disques robustes", "Facilité d'attelage", "Labourage efficace"],
    advantages: ["Préparation du sol optimale", "Réduction de l'effort", "Durée de vie prolongée"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Motoculteurs",
    description: "Une gamme de motoculteurs pour l'entretien de vos terrains agricoles.",
    image: motorCultivatorImg,
    features: ["Polyvalent", "Facilité d'utilisation", "Robuste"],
    advantages: ["Préparation efficace du sol", "Réduction des efforts physiques", "Longue durée de vie"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Pulvérisateurs",
    description: "Nous offrons une variété de pulvérisateurs pour vos besoins agricoles.",
    image: pulverisateurImg,
    features: ["Grande capacité", "Uniformité de pulvérisation", "Facilité de transport"],
    advantages: ["Augmentation des rendements", "Réduction de la consommation de produits chimiques", "Durabilité"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Machines à moudre le riz",
    description: "Nos machines à moudre le riz sont efficaces et durables.",
    image: riceMillingMachineImg,
    features: ["Grande capacité", "Faible consommation d'énergie", "Facilité d'utilisation"],
    advantages: ["Amélioration de la qualité du riz", "Réduction des pertes", "Productivité accrue"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Tracteurs",
    description: "Nous vendons des tracteurs de différentes tailles et puissances pour vos besoins agricoles.",
    image: tractorsImg,
    features: ["Haute puissance", "Confort de conduite", "Technologie moderne"],
    advantages: ["Efficacité accrue", "Réduction des temps de travail", "Longue durée de vie"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Systèmes de pompage d'eau",
    description: "Nous proposons des systèmes de pompage d'eau pour une utilisation agricole et domestique.",
    image: waterPumpingSystemImg,
    features: ["Efficacité énergétique", "Durabilité", "Facilité d'installation"],
    advantages: ["Accès constant à l'eau", "Réduction des coûts énergétiques", "Maintenance facile"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Pompe immergée 4''5.5kw 7.5hp 21 étages",
    description: "Pompe immergée puissante pour diverses applications hydrauliques.",
    category: "Pompes immergées",
    image: pompeImmergeeImg,
    features: ["5.5kw", "7.5hp", "21 étages"],
    advantages: ["Haute performance", "Durable", "Efficace énergétiquement"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Pompe immergée 4'' 7.5kw 10hp 22 étages",
    description: "Pompe immergée de haute puissance pour les besoins en eau importants.",
    category: "Pompes immergées",
    image: pompeImmergeeImg7_5kw,
    features: ["7.5kw", "10hp", "22 étages"],
    advantages: ["Très haute performance", "Robuste", "Idéale pour les grandes profondeurs"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Panneau solaire 380 W",
    description: "Panneau solaire haute efficacité pour diverses applications.",
    category: "Énergie solaire",
    image: panneauSolaireImg,
    features: ["380 W", "Haute efficacité", "Durable"],
    advantages: ["Économie d'énergie", "Écologique", "Faible maintenance"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Moulin à céréales moteur combiné",
    description: "Moulin polyvalent pour le traitement de divers types de céréales.",
    category: "Équipement agricole",
    image: moulinCerealeImg,
    features: ["Moteur combiné", "Polyvalent", "Haute capacité"],
    advantages: ["Efficace", "Adapté à différentes céréales", "Facile à utiliser"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Décortiqueuse à riz électrique & diesel",
    description: "Machine polyvalente pour le décorticage du riz, disponible en version électrique ou diesel.",
    category: "Équipement agricole",
    image: decortiqueuseRizImg,
    features: ["Double alimentation : électrique et diesel", "Haute capacité", "Efficace"],
    advantages: ["Polyvalence d'alimentation", "Productivité élevée", "Qualité de décorticage supérieure"],
    price: "Contactez-nous pour un devis",
  },
  {
    title: "Groupe électrogène à eau & air",
    description: "Groupe électrogène fiable pour diverses applications, disponible avec refroidissement à eau ou à air.",
    category: "Équipement énergétique",
    image: groupeElectrogeneImg,
    features: ["Disponible en version refroidie à eau ou à air", "Puissance variable", "Fiable"],
    advantages: ["Source d'énergie de secours", "Adapté à différents environnements", "Facile à entretenir"],
    price: "Contactez-nous pour un devis",
  },
];

// Extraire toutes les catégories uniques
const categories = ['Tous', ...new Set(products.map(product => product.category).filter(Boolean))];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      (selectedCategory === 'Tous' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedCategory]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.productsPage}>
      <div className={styles.productsHeader}>
        <h2>Nos Produits et Services</h2>
        <input
          type="text"
          placeholder="Rechercher un produit"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
  
      {/* Ajouter la vidéo ici, avant la liste des produits */}
      <div className={styles.videoContainer}>
  <video className={styles.productVideo} controls>
    <source src={productDemoVideo} type="video/mp4" />
    Votre navigateur ne supporte pas la vidéo.
  </video>
</div>
  

  
      {selectedProduct ? (
        <ProductDetail
          {...selectedProduct}
          onClose={handleClose}
          className={styles.productDetail}
        />
      ) : (
        <div className={styles.productList}>
          {filteredProducts.map((product, index) => (
            <div key={index} className={styles.productItem} onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <h3>{product.title}</h3>
              {product.category && <p className={styles.productCategory}>{product.category}</p>}
              <p className={styles.productDescription}>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default Products;
