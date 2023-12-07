import Link from 'next/link';
import styles from './styles.module.css';
const Navbar = () => {
    return (
        <nav>
                <Link
                href="/login"
                className="btn btn-primary btn-sm"
                >
                Iniciar Sesion
                </Link>
                <Link
                href="/register"
                className="btn btn-primary btn-sm"
                >
                Registrarse
                </Link>
        </nav>
    );
};
export default Navbar;