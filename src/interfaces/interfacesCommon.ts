import React from 'react';

interface BaseInterface {
  children?: React.ReactNode;
  className?: string;
}

export interface BoxInterface extends BaseInterface {}

export interface TextInterface extends BaseInterface {}

export interface RowInterface extends BaseInterface {}

export interface ColumnInterface extends BaseInterface {}

export interface ImageInterface extends BaseInterface {
  src: string;
  alt: string;
}

export interface SeparatorInterface extends BaseInterface {}

export interface LinkInterface extends BaseInterface {
  href: string;
  target: string;
  rel: string;
  children?: React.ReactNode;
}
