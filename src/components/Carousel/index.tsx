"use client"
import React, { useState } from 'react';
import styles from './styles.module.scss';
import arrowLeft from '../../assets/flecha1.svg';
import arrowRight from '../../assets/flecha2.svg';
import ItemVolumen from './ItemVolumen'
import mockData from '../__mock__/data.json';//aqui importamos el data.json para hacer pruebas

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
          <img src={arrowLeft.src} alt="Flecha Izquierda" />
        </button>
        
       {/*  Aqui damos uso al componente ItemVolumen donde se extrae datos del JSON*/}
        {mockData.slice(currentIndex, currentIndex + 3).map((item) => (
          <ItemVolumen key={item.volume} item={item} />
        ))}
        
        <button className={styles.arrow} onClick={handleNextClick}>
        <img src={arrowRight.src} alt="Flecha Derecha" />
        </button>
      </div>
      
      
    </div>
  );
};

export default Carousel;
