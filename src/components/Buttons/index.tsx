import { signIn } from 'next-auth/react';
import image from './facebook.png';
import imageg from './google.png';
import Image from 'next/image'
import styles from './styles.module.css';

const Buttons = () => {
  const signInWithProvider = async (provider: string) => {
    await signIn(provider);
  };

  return (
    <div className={styles.Button}>
    <center>
      <div className={styles.ButtonGoogle}>
        <Image
            src={imageg}
            width={44}
            height={43}
            alt="Face"
        />
        <button onClick={() => signInWithProvider('google')} className='text-white'>Google</button>
      </div>
    </center>
    <br />
    <center>
      <div className={styles.ButtonFacebook}>
        <Image
            src={image}
            width={31}
            height={67}
            alt="google"
        />
        <button onClick={() => signInWithProvider('facebook')} className='text-white'>Facebook</button>
      </div>
      </center>
    </div>
  );
};

export default Buttons;
