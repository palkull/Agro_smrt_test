import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './Services.module.css' ; // Importa tus estilos CSS

// Importa tus imágenes utilizando import para que webpack las maneje
import inv from '../assets/Inv.jpg';
import inv2 from '../assets/Inv2.jpg';
import inv3 from '../assets/Inv3.jpg';

const Services = () => {
  const images = [
    {
      original: inv,
      thumbnail: inv,
    },
    {
      original: inv2,
      thumbnail: inv2,
    },
    {
      original: inv3,
      thumbnail: inv3,
    },
  ];

  

  return (
    <div name="Galería" className={styles.benefits}> 
    <div className={styles.galleryContainer}>
    <ImageGallery items={images}
    showNav={false}
    showBullets={true} />
  </div>
  </div>
  );
}

export default Services;

