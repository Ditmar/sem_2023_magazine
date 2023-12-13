import MainNavigation from '../MainNavigation/MainNavigation'
import Navbar from '../Navbar'
import styles from './styles.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerSection}>
                <MainNavigation />
            </div>
            <div className={styles.text}>
                Header
            </div>
        </header>
    )
}
export default Header