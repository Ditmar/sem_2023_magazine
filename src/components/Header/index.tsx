
import Navbar from '../Navbar'
import styles from './styles.module.scss'


//import Carousel from '../carrusel/Carousel'
import CarouselContainer from '../carrusel/CarouselContainer'
import  MenuList from '../Menu/MenuList'
import VolumeDate from '../VolumeDate/VolumeDate'
import SingleVolumeDatePage from './../VolumeDate/VolumeDate';


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