import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'; // Iconos para contacto

const UserProfile = () => {
  const { userId } = useParams(); // Obtiene el ID del usuario de la URL
  const navigate = useNavigate(); // Agregando useNavigate para la redirección
  const [user, setUser] = useState(null); // Estado para almacenar el usuario
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de los datos
  const [error, setError] = useState(null); // Estado para almacenar errores si ocurren

  // Fetch de los datos del usuario desde la API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/users/${userId}`); // Asegúrate de usar la URL completa y corregida

        if (!response.ok) {
          throw new Error('Usuario no encontrado'); // Maneja la situación en la que la respuesta no es ok
        }

        // Verificar si la respuesta es JSON
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json(); // Solo parsear si la respuesta es JSON
          setUser(data); // Guarda los datos del usuario
        } else {
          throw new Error('Respuesta no es un JSON válido');
        }
      } catch (err) {
        setError(err.message); // Si ocurre un error, lo guarda en el estado
      } finally {
        setLoading(false); // Cambia el estado de carga a falso
      }
    };

    fetchUserData();
  }, [userId]); // Repite cuando cambie el ID del usuario

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Loading...</div>;
  }

  // Mostrar un mensaje de error si no se pueden obtener los datos
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Si no se encuentra al usuario
  if (!user) {
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4" style={styles.card}>
        <div className="row align-items-center">
          {/* Sección de la imagen del perfil */}
          <div className="col-md-3 text-center">
            <img
              src={user.imagen || '/imagenes/default-avatar.png'} // Imagen por defecto si no hay imagen de usuario
              alt={user.nombre}
              className="img-fluid rounded-circle mb-3"
              style={styles.image}
            />
          </div>

          {/* Sección de los detalles del usuario */}
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="mb-0" style={styles.name}>{user.nombre}</h2>
                <p className="text-muted mb-2" style={styles.location}>
                  <FaMapMarkerAlt className="me-2" /> {user.ciudadResidencia || 'Ubicación no disponible'}
                </p>
              </div>
              <button onClick={() => navigate(`/users/edit/${user.id}`, { state: { user } })} className="btn btn-outline-primary">
                Editar Perfil
              </button>
            </div>

            {/* Descripción del usuario */}
            <p className="mt-3" style={styles.description}>{user.descripcion || 'Descripción no disponible'}</p>

            {/* Información de contacto */}
            <div className="mt-4" style={styles.contactInfo}>
              <p>
                <FaEnvelope className="me-2" /> {user.correoElectronico || 'Correo no disponible'}
              </p>
              <p>
                <FaPhone className="me-2" /> {user.numeroTelefonico || 'Teléfono no disponible'}
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> {user.direccion || 'Dirección no disponible'}
              </p>
              <p>
                <FaInstagram className="me-2" /> {user.usuarioInstagram || 'Instagram no disponible'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos para el perfil
const styles = {
  card: {
    borderRadius: '10px',
    backgroundColor: '#FDF7F2',
    border: 'none',
  },
  image: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '36px', // Tamaño del nombre más grande
    fontWeight: 'bold',
  },
  location: {
    fontSize: '20px', // Tamaño del texto de ubicación
    marginTop: '-10px', // Alinear mejor con el nombre
  },
  description: {
    fontSize: '18px', // Tamaño más grande para la descripción
  },
  contactInfo: {
    fontSize: '18px', // Tamaño del texto de contacto más grande
  },
};

export default UserProfile;
