import React from 'react';
import styles from './styles.module.scss';

interface VolumeDateProps {
  date: string;
  volume: string;
  number: string;
}

const SingleVolumeDateComponent: React.FC<VolumeDateProps> = ({ date, volume,number }) => {
  return (
    <div className={styles.dateContainer}>
      <h3 className={styles.dateContent}>
        {date}|{volume}|{number}
      </h3>
    </div>
  );
};

const SingleVolumeDatePage: React.FC = () => {
 
  const fecha = "ABRIL 16.2023";
  const volumen = "Vol.1";
  const number = "Nu.1"
  return (
    <div>
      <SingleVolumeDateComponent date={fecha} volume={volumen} number={number}/>
    </div>
  );
};
export default SingleVolumeDatePage;
