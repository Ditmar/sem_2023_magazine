
import React from 'react';
import Image from 'next/image';
import styles from './Carousel.module.scss';

interface CarouselImageProps {
  src: string;
  alt: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
  return (
    <div className={styles.contentImage}>
      <Image className={styles.carousel_image} src={src} alt={alt} />
    </div>
  );
};

export default CarouselImage;

