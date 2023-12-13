import React from 'react';
import { RowInterface } from '@/interfaces/interfacesCommon';
import styles from './styles.module.scss';
const ReusableRow: React.FC<RowInterface> = ({ children, className }) => {
  return <div className={`${styles.row} ${className}`}>{children}</div>;
};

export default ReusableRow;
