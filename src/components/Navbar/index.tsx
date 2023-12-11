import Link from 'next/link';
import styles from './styles.module.css';
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
            </div>
        </nav>
    );
};
export default Navbar;