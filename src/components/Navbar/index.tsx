'use client'
import styles from './styles.module.scss';
import Image from 'next/image';
import MenuIcon from '../MenuIcon/MenuHamburger'
import tupa from 'public/assets/img/icon-tupa.svg'
import logo from 'public/assets/img/logo.png'

const Navbar = () => {
    return (
        <nav >
            <div className={styles.nav} >
                <div className={styles.rectangle1}> 
                    <div className={styles.rectangle2}>
                        <Image className={styles.logos} src={logo} alt="image logo"  />
                    </div>
                    <MenuIcon/>
                    <button className={styles.icon}>
                        <Image  src={tupa} alt="tupa icon" />
                    </button>  
                </div>
<<<<<<< HEAD
            </div>
=======
            </div>  
>>>>>>> 8f10b52 (feat(common): solution to comments. In styles -px with -rm and remove -important)
        </nav>
    );
};
export default Navbar;