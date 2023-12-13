import React from 'react';
import { SeparatorInterface } from '@/interfaces/interfacesCommon';
import styles from './styles.module.scss';
const ReusableSeparator: React.FC<SeparatorInterface> = ({
  
  className,
}) => {
  return <div className={`${styles.separator} ${className}`}/>;
};

export default ReusableSeparator;
