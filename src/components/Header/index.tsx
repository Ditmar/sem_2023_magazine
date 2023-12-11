
import Navbar from '../Navbar'
import styles from './styles.module.scss'

import CarouselContainer from '../carrusel/CarouselContainer'
import VolumeDate from '../VolumeDate'



const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar></Navbar>
            <CarouselContainer/>
            <div className={styles.voldate}>
                <VolumeDate />
            </div>
        </header>
    )
}
export default Header