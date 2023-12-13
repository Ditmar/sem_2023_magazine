
import React from 'react';
import Image from 'next/image';
import styles from './Carousel.module.scss';

interface CarouselImageProps {
  image: string;
  alt: string;
}
const CarouselImage: React.FC<CarouselImageProps> = ({ image, alt }) => {
  return (
    <div className={styles.contentImage}>
      <Image className={styles.carousel_image} src={image} alt={alt} />

    </div>
  );
};

export default CarouselImage;

