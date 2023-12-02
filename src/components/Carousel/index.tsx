"use client"
import React, { useState } from 'react';
import styles from './styles.module.scss'; // Asegúrate de tener tus estilos definidos en styles.module.scss
import mockData from '../__mock__/data.json';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //funciones para funcionamiento del carrusel
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < mockData.length - 3 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.subtitulo}><h2>VOLÚMENES</h2></div>
      <div className={styles.slider}>
        
        <button className={`${styles.arrow} ${currentIndex === 0 ? styles.disabled : ''}`}onClick={handlePrevClick}disabled={currentIndex === 0} >
          <svg width="39" height="63" viewBox="0 0 39 63" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_36_446)"><path d="M37.6446 0C25.306 10.3008 12.9653 20.6016 0 31.4258C12.7881 42.1127 25.2883 52.5553 37.7885 63C38.1916 62.6641 38.5969 62.3283 39 61.9924C33.8728 53.3077 28.9294 44.5096 23.5254 35.9972C21.4568 32.7388 21.3881 30.3986 23.4633 27.1162C28.863 18.5667 33.8152 9.74465 38.9468 1.03161C38.5127 0.689192 38.0787 0.344596 37.6446 0Z" fill="#178435"/></g><defs><clipPath id="clip0_36_446"><rect width="39" height="63" fill="white" transform="matrix(-1 0 0 1 39 0)"/></clipPath></defs>
          </svg>
        </button>
        {mockData.slice(currentIndex, currentIndex + 3).map((item) => (          
          <div key={item.volume} className={styles.carouselItem}>
            <a href='post'><img src={item.image} alt={`Volume ${item.volume}`} /></a>
            <div className={styles.details}>
              <p className={styles.date}> {item.date}</p>
              <p className={styles.volume}>Vol: {item.volume}</p>
            </div>
          </div>
        ))}
      
        <button className={styles.arrow} onClick={handleNextClick}>
        <svg width="51" height="63" viewBox="0 0 51 63" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_36_448)"><path d="M1.7725 0C17.9075 10.3008 34.0454 20.6016 51 31.4258C34.2771 42.1127 17.9307 52.5553 1.58425 63C1.05713 62.6641 0.527117 62.3283 0 61.9924C6.70481 53.3077 13.1692 44.5096 20.2361 35.9972C22.9412 32.7388 23.031 30.3986 20.3172 27.1162C13.2561 18.5667 6.78011 9.74465 0.0695099 1.03161C0.637174 0.689192 1.20484 0.344596 1.7725 0Z" fill="#178435"/></g><defs><clipPath id="clip0_36_448"><rect width="51" height="63" fill="white"/></clipPath></defs>
        </svg>
        </button>
      </div>
      
      
    </div>
  );
};

export default Carousel;
