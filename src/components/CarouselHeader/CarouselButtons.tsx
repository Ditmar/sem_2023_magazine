// CarouselButtons.js
import React from 'react';
import Link from 'next/link';
import styles from './Carousel.module.scss';

import { Carousel } from 'react-bootstrap';

const CarouselButtons = () => {
  return (
    <Carousel.Caption className={styles.carrucelCap}>
      <Link href="/login">
        <button className={styles.button_one}>Iniciar Sesión</button>
      </Link>
      <Link href="/register">
        <button className={styles.button_two}>Registrarse</button>
      </Link>
    </Carousel.Caption>
  );
};

export default CarouselButtons;
