// ReusableImage.js
import React from 'react';
import { ImageInterface } from '@/interfaces/interfacesCommon';
import styles from './styles.module.scss';

const ReusableImage: React.FC<ImageInterface> = ({ src, alt, className }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${className}`}
      />
    </>
  );
};

export default ReusableImage;