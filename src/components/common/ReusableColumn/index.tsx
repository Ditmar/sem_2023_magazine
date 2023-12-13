import React from 'react';
import { ColumnInterface } from '@/interfaces/interfacesCommon';
import styles from './styles.module.scss';
const ReusableColumn: React.FC<ColumnInterface> = ({ children, className }) => {
  return <div className={`${styles.column} ${className}`}>{children}</div>;
};

export default ReusableColumn;
