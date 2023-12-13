import Navbar from '../Navbar';
import styles from './styles.module.css';

const MainNavigation = () => {

    return (
        <nav className={styles.mainNavigation}>
            {/* Menu here */}
            <Navbar/>
        </nav>
    )
}
export default MainNavigation;