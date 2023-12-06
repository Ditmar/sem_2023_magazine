import React from 'react';
import styles from './styles.module.scss';

interface Item {
  id: number;
  volume: number;
  image: string;
  date: string;
}

interface ItemVolumenProps {
  item: Item;
}

const ItemVolumen: React.FC<ItemVolumenProps> = ({ item }) => {
  return (
    <div key={item.id} className={styles.carouselItem}>
      <a href='post'>
        <img src={item.image} alt={`Volume ${item.volume}`} />
      </a>
      <div className={styles.details}>
        <p className={styles.date}> {item.date}</p>
        <p className={styles.volume}>Vol: {item.volume}</p>
      </div>
    </div>
  );
};

export default ItemVolumen;