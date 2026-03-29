import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import RegisterModal from './RegisterModal'; // Asegúrate de importar el componente de registro
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        borderRadius: '10px',
        padding: '0',
        display: 'flex',
        flexDirection: 'row',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000,
    },
};

const LoginModal = ({ isOpen, onRequestClose }) => {
    const { t } = useTranslation(); // Hook de traducción
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setShowRegister(true);
    };

    const closeModals = () => {
        setShowRegister(false);
        onRequestClose();
    };

    // Función para hacer fetch de los usuarios desde la API
    const fetchUsers = () => {
        fetch("http://localhost:8000/api/v1/users") // Cambia la URL si es diferente
            .then((response) => {
                if (response.status !== 200) throw new Error('Error al obtener usuarios');
                return response.json();
            })
            .then((data) => {
                setUsers(data); // Establece los usuarios en el estado
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/api/v1/users/login", {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => {
                if (response.status !== 200) throw new Error(response.statusText);
                return response.json();
            })
            .then(body => {
                const { userId, token } = body;
                localStorage.setItem('token', token);
                setError('');
                onRequestClose();
                navigate(`/profile/${userId}`);
            })
            .catch(err => {
                setError(t('LoginModal.error'));
            });
    };

    // Llamada para obtener los usuarios al montar el componente
    React.useEffect(() => {
        if (isOpen) {
            fetchUsers(); // Solo hacer fetch cuando el modal está abierto
        }
    }, [isOpen]);

    // Referenciar users sin hacer nada con él, solo para evitar el warning
    React.useEffect(() => {
        console.log(users); // Solo se usa para evitar el warning
    }, [users]);

    return (
        <>
            <Modal
                isOpen={isOpen && !showRegister}
                onRequestClose={onRequestClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <div style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#4A4A4A' }}>{t('LoginModal.title')}</h2>

                    <p data-testid="error" style={{ color: 'red' }}>{error}</p>

                    <div style={{ marginBottom: '20px' }}>
                        <label>{t('LoginModal.username')}</label>
                        <input
                            type="text"
                            placeholder={t('LoginModal.usernamePlaceholder')}
                            style={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label>{t('LoginModal.password')}</label>
                        <input
                            type="password"
                            placeholder={t('LoginModal.passwordPlaceholder')}
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button style={styles.forgotPassword} onClick={() => { /* Acción para olvidar contraseña */ }}>
                        {t('LoginModal.forgotPassword')}
                    </button>

                    <div style={{ marginBottom: '20px' }}>
                        <input type="checkbox" id="keepLoggedIn" />
                        <label htmlFor="keepLoggedIn" style={styles.keepLoggedIn}>{t('LoginModal.keepLoggedIn')}</label>
                    </div>

                    <button style={styles.loginButton} onClick={handleLogin}>{t('LoginModal.loginButton')}</button>

                    <div style={styles.divider}>
                        <span>{t('LoginModal.orSignUp')}</span>
                    </div>

                    <div style={styles.socialButtons}>
                        <button style={styles.socialButton} aria-label="Google">
                            <FaGoogle aria-hidden="true" />
                        </button>
                        <button style={styles.socialButton} aria-label="Facebook">
                            <FaFacebookF aria-hidden="true" />
                        </button>
                    </div>

                    <p style={styles.signUpText}>
                        {t('LoginModal.noAccount')} {' '}
                        <button style={styles.linkButton} onClick={handleSignUpClick}>{t('LoginModal.signUp')}</button>
                    </p>
                </div>

                <div style={styles.logoContainer}>
                    <img src="/imagenes/logocompleto.png" alt="PawPal Logo" style={styles.logoImage} />
                </div>
            </Modal>

            <RegisterModal isOpen={showRegister} onRequestClose={closeModals} />
        </>
    );
};

const styles = {
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    forgotPassword: {
        display: 'block',
        marginBottom: '20px',
        textAlign: 'right',
        color: '#6B7280',
        textDecoration: 'none',
    },
    linkButton: {
        background: 'none',
        border: 'none',
        color: '#6B7280',
        textDecoration: 'underline',
        cursor: 'pointer',
        padding: 0,
        fontSize: 'inherit',
    },
    keepLoggedIn: {
        marginLeft: '5px',
    },
    loginButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#6B7280',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
    },
    divider: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#6B7280',
    },
    socialButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    socialButton: {
        padding: '10px 15px',
        backgroundColor: '#eaeaea',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '48%',
    },
    signUpText: {
        textAlign: 'center',
        marginTop: '20px',
        color: '#6B7280',
    },
    logoContainer: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
    },
    logoImage: {
        width: '200px',
        height: 'auto',
    },
};

export default LoginModal;
