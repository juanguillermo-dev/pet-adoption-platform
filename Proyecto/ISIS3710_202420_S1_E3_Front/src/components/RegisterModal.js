import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaGoogle, FaFacebookF, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
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

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const { t } = useTranslation(); // Hook de traducción
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false); // Estado para términos aceptados
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios de la API

  // Función para hacer fetch de los usuarios desde la API
  const fetchUsers = () => {
    fetch("http://localhost:8000/api/v1/users") // Cambia esta URL si es necesario
      .then((response) => {
        if (response.status !== 200) throw new Error('Error al obtener usuarios');
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Actualizar el estado con los usuarios obtenidos
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    if (isOpen) {
      fetchUsers(); // Obtener los usuarios cuando el modal se abre
    }
  }, [isOpen]);

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Verificar si el usuario o el correo ya existen en la base de datos
    const usuarioExistente = users.some(user => user.usuario === name);
    if (usuarioExistente) {
      alert(t('RegisterModal.userExists')); // Mensaje traducido
      return;
    }

    const correoExistente = users.some(user => user.correo === email);
    if (correoExistente) {
      alert(t('RegisterModal.emailExists')); // Mensaje traducido
      return;
    }

    // Validación de correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();
    if (!emailPattern.test(trimmedEmail)) {
      alert(t('RegisterModal.invalidEmail')); // Mensaje traducido
      return;
    }

    if (!termsAccepted) {
      alert(t('RegisterModal.acceptTerms')); // Mensaje traducido
      return;
    }

    // Crear un nuevo usuario
    const newUser = {
      usuario: name,
      contraseña: password,
      correo: trimmedEmail,
      nombre: '',
      ciudad: '',
      direccion: '',
      numero_telefonico: '',
      usuario_instagram: '',
      descripcion: ''
    };

    // Enviar el nuevo usuario a la API
    fetch("http://localhost:8000/api/v1/users/register", {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(body => {
        if (!body.success) {
          // Manejar el error de la respuesta
          throw new Error(body.error || 'Error al registrar el usuario');
        }
        alert(t('RegisterModal.success')); // Mensaje de éxito traducido

        // Reiniciar los campos del formulario
        setName('');
        setEmail('');
        setPassword('');
        setTermsAccepted(false);
        onRequestClose(); // Cerrar el modal después del registro
      })
      .catch(err => {
        console.error('Error registering user:', err);
        alert(t('RegisterModal.error')); // Mensaje de error traducido
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <div style={styles.container}>
        <div style={styles.leftSide}>
          <h2 style={styles.header}>{t('RegisterModal.title')}</h2>
          <form onSubmit={handleCreateAccount}>
            <div style={styles.formGroup}>
              <FaUser style={styles.icon} />
              <input
                type="text"
                placeholder={t('RegisterModal.fullName')}
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={styles.formGroup}>
              <FaEnvelope style={styles.icon} />
              <input
                type="email"
                placeholder={t('RegisterModal.email')}
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={styles.formGroup}>
              <FaLock style={styles.icon} />
              <input
                type="password"
                placeholder={t('RegisterModal.password')}
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={styles.checkboxGroup}>
              <input
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
              />
              <label htmlFor="terms">
                {t('RegisterModal.terms')}
                <button
                  style={{ background: 'none', color: '#6B7280', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
                  type="button"
                >
                  {t('RegisterModal.termsConditions')}
                </button>
              </label>
            </div>
            <button type="submit" style={styles.button}>{t('RegisterModal.createAccount')}</button>
          </form>
          <p>{t('RegisterModal.orSignUpWith')}</p>
          <div style={styles.socialButtons}>
            <button style={styles.socialButton}><FaGoogle /></button>
            <button style={styles.socialButton}><FaFacebookF /></button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100%',
  },
  leftSide: {
    width: '50%',
    padding: '40px',
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: '10px',
    color: '#777',
  },
  input: {
    width: '100%',
    padding: '10px 40px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  checkboxGroup: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#6B47DC',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '20px',
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
  logoImage: {
    width: '200px',
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
};

export default RegisterModal;
