'use client'
import { useEffect, useState } from 'react';
import { usePathname} from 'next/navigation'
import MainNavigation from '../MainNavigation/MainNavigation';
import styles from './styles.module.scss';
import Years from '../Years/Years';
import volumenes from '@/data/Volumenes';



const Header = () => {
    const pathname = usePathname()
    const url = `${pathname}`
    const [Vol, setVol] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect( ()=> {
        if (url===`/volumenes`) {
            setVol(true);
        }else{
            for (let i = 0; i < volumenes.length; i++) {
                const volus = volumenes[i];
                if (url === `/volumenes/${volus.dateYear}`) {
                  setVol(true);
                  break;
                } else {
                  setVol(false);
                }
              }
        }
        setLoading(false);
        
    },[url])
    return (
        <header className={styles.header}>
            <MainNavigation />
            <div className={styles.text}>
            {loading ? (
            <p>...</p>
            ) : Vol ? (
            <Years/>
            )  :   (
            <p></p>
            )}
            </div>
        </header>
    );
};

export default Header;
