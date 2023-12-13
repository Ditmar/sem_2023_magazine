'use client'
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from './CarouselImage';
import CarouselButtons from './CarouselButtons';
import imageheader from 'public/assets/img/Rectangle49.png';
import imageheader2 from 'public/assets/img/Rectangle6.png';

<<<<<<< HEAD:src/components/CarouselHeader/CarouselContainer.tsx
=======

>>>>>>> 8f10b52a4753841c5f036022f48ecef9eccecbbc:src/components/carrusel/CarouselContainer.tsx
const CarouselContainer = () => {
  return (
    <>
      <Carousel>
<<<<<<< HEAD:src/components/CarouselHeader/CarouselContainer.tsx
        <Carousel.Item><CarouselImage image={imageheader} alt="Header 1" /></Carousel.Item>
        <Carousel.Item><CarouselImage image={imageheader2} alt="Header 2" /></Carousel.Item>
=======
        <Carousel.Item><CarouselImage src={imageheader} alt="Header 1" /></Carousel.Item>
        <Carousel.Item><CarouselImage src={imageheader2} alt="Header 2" /></Carousel.Item>
>>>>>>> 8f10b52a4753841c5f036022f48ecef9eccecbbc:src/components/carrusel/CarouselContainer.tsx
      </Carousel>
      <CarouselButtons /> 
    </>
    
  );
};

export default CarouselContainer;
