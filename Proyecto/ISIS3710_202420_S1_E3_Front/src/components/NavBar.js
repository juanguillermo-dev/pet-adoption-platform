import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importar el hook para internacionalización
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'; // Importar el modal de registro

const NavBar = () => {
    const { t, i18n } = useTranslation();  // Hook de traducción
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(token != null);
    }, [isLoggedIn]);

    const openLoginModal = () => {
        setIsLoginOpen(true);
        setIsRegisterOpen(false); // Cerrar el de registro si está abierto
    };

    const openRegisterModal = () => {
        setIsRegisterOpen(true);
        setIsLoginOpen(false); // Cerrar el de login si está abierto
    };

    const closeLoginModal = () => setIsLoginOpen(false);
    const closeRegisterModal = () => setIsRegisterOpen(false);

    // Función para cambiar el idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.logoContainer}>
                <Link to="/" style={styles.logoLink}>
                    <img src="/imagenes/logoimagen.png" alt="PawPal" style={styles.logo} />
                    <span style={styles.logoText}>PawPal</span>
                </Link>
            </div>
            <ul style={styles.menu}>
                <li><Link to="/adopcion" style={styles.link}>{t('NavBar.adoption')}</Link></li>
                <li><Link to="/productos" style={styles.link}>{t('NavBar.products')}</Link></li>
                <li><Link to="/fundaciones" style={styles.link}>{t('NavBar.foundations')}</Link></li>
                <li><Link to="/hogares" style={styles.link}>{t('NavBar.fosterHomes')}</Link></li>
            </ul>
            <div style={styles.buttonsContainer}>
                {!isLoggedIn && <>
                    <button onClick={openLoginModal} style={styles.loginButton}>{t('NavBar.login')}</button>
                    <button onClick={openRegisterModal} style={styles.registerButton}>{t('NavBar.register')}</button>
                </>
            }
                {isLoggedIn && <button onClick={() => {
                    localStorage.removeItem('token');
                    setIsLoggedIn(false);
                }} style={styles.loginButton}>Logout</button>}

            {/* Selector de idioma */}
            <select onChange={(e) => changeLanguage(e.target.value)} style={styles.languageSelector}>
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </div>

{/* Modal de Login */}
    <LoginModal
        isOpen={isLoginOpen}
        onRequestClose={closeLoginModal}
    />

{/* Modal de Registro */}
    <RegisterModal
        isOpen={isRegisterOpen}
        onRequestClose={closeRegisterModal}
    />
</nav>
);
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5e5768',
        padding: '10px 20px',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    logo: {
        height: '40px',
        marginRight: '10px',
    },
    logoText: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    menu: {
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
    },
    link: {
        color: '#ffffff',
        fontSize: '16px',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
    },
    loginButton: {
        padding: '8px 16px',
        backgroundColor: '#a59489',
        color: '#2e2c2d',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    registerButton: {
        padding: '8px 16px',
        backgroundColor: '#2e2c2d',
        color: '#ffffff',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    languageSelector: {
        padding: '5px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        border: '1px solid #cccccc',
    },
};

export default NavBar;
