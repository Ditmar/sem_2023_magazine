'use client'
import volumenes from '@/data/Volumenes'
import styles from './stylesbutton.module.scss';
import { useState } from 'react'
import ButtonYear from '../ButtonYear/ButtonYear';
const Years = () => {

    const [visible, setVisible] = useState(false);
    const uniqueIDs = []
    const unique = volumenes.filter( e => {
    const isD = uniqueIDs.includes( e.dateYear )

    if( !isD ) {
      uniqueIDs.push( e.dateYear )
      return true
    }
      return false
  } )

    return (
            <div>
                <button className={styles.buttonyear1} onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar" : "Anios"}
                </button>
                    <div className={styles.qwerty}>
                    {visible && (unique
                        .map((props) => (
                        <ButtonYear            
                        key={props.id}
                        { ...props }               
                        />            
                    )))}
                    </div>
            </div>
    )
}
export default Years