'use client'
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from './CarouselImage';
import CarouselButtons from './CarouselButtons';
import imageheader from 'public/assets/img/Rectangle49.png';
import imageheader2 from 'public/assets/img/Rectangle6.png';
import Image from 'next/image';

const CarouselContainer = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item><CarouselImage image={imageheader} alt="Header 1" /></Carousel.Item>
        <Carousel.Item><CarouselImage image={imageheader2} alt="Header 2" /></Carousel.Item>
      </Carousel>
      <CarouselButtons /> 
    </>
    
  );
};

export default CarouselContainer;
