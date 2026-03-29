import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaUser, FaEnvelope } from 'react-icons/fa'; // Iconos de usuario y correo

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

const FundacionModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/v1/foundations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({name, email, city, address, phone, description, image})
    })
        .then(response => response.json())
        .then(body => {
          if (body.error) throw new Error(body.message);
          setError('');
          onRequestClose();
        })
        .catch(error => setError(error.toString()));
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
          <h2 style={styles.header}>Inscribir Fundación</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <FaUser style={styles.icon}/>
              <input
                  type="text"
                  placeholder="Nombre de la Fundación"
                  style={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
            </div>
            <div style={styles.formGroup}>
              <FaEnvelope style={styles.icon}/>
              <input
                  type="email"
                  placeholder="Correo"
                  style={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                  type="text"
                  placeholder="Ciudad"
                  style={styles.input}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                  type="text"
                  placeholder="Dirección"
                  style={styles.input}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                  type="text"
                  placeholder="Teléfono"
                  style={styles.input}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                  type="text"
                  placeholder="URL Imágen"
                  style={styles.input}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
              />
            </div>
            <div style={styles.formGroup}>
              <textarea
                  placeholder="Descripción"
                  style={styles.input}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
              />
            </div>
            <button type="submit" style={styles.button}>Inscribir Fundación</button>
          </form>
        </div>

        <div style={styles.rightSide}>
          <img src={image} alt={name + ' Logo'} style={styles.logoImage}/>
        </div>
      </div>
    </Modal>
  );
};

// Estilos del contenido del modal
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
  rightSide: {
    width: '50%',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
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
  logoImage: {
    width: '200px',
  },
};

export default FundacionModal;
