import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Iconos para contacto
import { useTranslation } from 'react-i18next'; // Importamos el hook para internacionalización

const FundDetail = () => {
  const { id } = useParams(); // Obtener el id desde la URL
  const location = useLocation();
  const navigate = useNavigate(); // Agregando useNavigate para la redirección
  const { fund: fundFromState } = location.state || {};
  
  const [fund, setFund] = useState(fundFromState || null);
  const { t } = useTranslation(); // Hook de traducción

  useEffect(() => {
    const fetchFund = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/foundations/${id}`);
        const data = await response.json();
        setFund(data);
      } catch (error) {
        console.error('Error al obtener la fundación:', error);
      }
    };
    fetchFund();
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/v1/foundations/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    })
        .then(res => {
          if (res.status !== 204) {
            alert("Error: " + res.statusText);
          } else {
            navigate("/fundaciones");
          }
        })
  }

  if (!fund) {
    return <div>{t('FundDetail.notFound')}</div>; // Texto traducido
  }

  return (
    <div className="container mt-5" style={{ backgroundColor: '#E7E2DF', padding: '20px' }}>
      <div className="card shadow p-4" style={styles.card}>
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <img
              src={`${fund.image}?nocache=${id}` || 'https://via.placeholder.com/400x300'} // Imagen por defecto si no hay imagen
              alt={fund.name}
              className="img-fluid rounded-circle mb-3"
              style={styles.image}
            />
          </div>

          {/* Sección de los detalles de la fundación */}
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="mb-0" style={styles.name}>{fund.name || t('FundDetail.noName')}</h2>
                <p className="text-muted mb-2" style={styles.location}>
                  <FaMapMarkerAlt className="me-2"/> {fund.city || t('FundDetail.noCity')}
                </p>
              </div>
              {/* Botón de Editar */}
              <button onClick={() => navigate(`/funds/edit/${fund.id}`, {state: {fund}})} className="btn btn-primary">
                Editar
              </button>
              <button onClick={handleDelete} className="btn btn-danger">
                Eliminar
              </button>
            </div>

            {/* Descripción de la fundación */}
            <p className="mt-3" style={styles.description}>{fund.description || t('FundDetail.noDescription')}</p>

            {/* Información de contacto */}
            <div className="mt-4" style={styles.contactInfo}>
              <p>
                <FaEnvelope className="me-2" /> {fund.email || t('FundDetail.noEmail')}
              </p>
              <p>
                <FaPhone className="me-2" /> {fund.phone || t('FundDetail.noPhone')}
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> {fund.address || t('FundDetail.noAddress')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos para el perfil de la fundación
const styles = {
  card: {
    borderRadius: '15px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  image: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    fontSize: '20px',
    marginTop: '-10px',
    textAlign: 'center',
  },
  description: {
    fontSize: '18px',
    color: '#6B7280',
    margin: '10px 0',
    textAlign: 'justify',
  },
  contactInfo: {
    fontSize: '18px',
    marginTop: '20px',
    color: '#6B7280',
  },
};

export default FundDetail;
