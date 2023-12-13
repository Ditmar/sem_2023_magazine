import React from 'react';
import { TextInterface } from '@/interfaces/interfacesCommon';
import styles from './styles.module.scss';
const ReusableText: React.FC<TextInterface> = ({ children, className }) => {
  return <span className={`${styles.text} ${className}`}>{children}</span>;
};

export default ReusableText;
