'use client'
import  React from 'react';

import styles from './styles.module.scss'
import article from './img/article.svg'
import ini from './img/inicio.svg'
import volumenes from './img/vol.svg'
import MenuItem from '../menuItem';

export default function MenuList() {

    return (
        <div className={styles.container}>
          <ul className={styles.nav}>
            <MenuItem href="/articles" src={article} alt="icono de articulo" text="ARTICULOS" />
            <MenuItem href="/" src={ini} alt="icono de inicio" text="INICIO" />
            <MenuItem href="/vol" src={volumenes} alt="icono de volumenes" text="VOLUMENES" />
          </ul>
        </div>
    )
}