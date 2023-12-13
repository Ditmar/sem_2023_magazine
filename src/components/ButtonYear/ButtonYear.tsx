'use client'
import React, { useState } from 'react';
import styles from './stylesbutton.module.scss';
import { useRouter } from 'next/navigation';

const ButtonYear: React.FC = ({id,dateYear}:any) => {

  const [visible, setVisible] = useState(false);

  const  router = useRouter()
  const onButton = ( id: string ) =>{
    router.push(`/volumenes/${id}`)
  }

  return (
    <div className={styles.years}>
      {
        <div className={styles.buttonyears}>
          {
            <button key={id} onClick={() => onButton(dateYear)}>
              {dateYear}</button>
          }
          
        </div>
      }
    </div>
  );
};

export default ButtonYear;
