import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProdDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state || !location.state.product) {
      navigate("/productos");
    }
  }, [location.state, navigate]);

  if (!location.state || !location.state.product) {
    return null;
  }

  const { product } = location.state; 

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.productMainInfo}>
          <img src={product.imagen} alt={product.nombreProducto} style={styles.profileImage} />
          <h2>{product.nombreProducto}</h2>
          <p>Disponible en: {product.disponibleEn}</p>
          <p>Precio: ${product.precio}</p>
        </div>
        <button onClick={() => navigate('/productos')} style={styles.backButton}>Volver al listado</button>
      </div>

      {/* Main Image Section */}
      <div style={styles.mainContent}>
        <div style={styles.imageSection}>
          <img src={product.imagen} alt={product.nombreProducto} style={styles.mainImage} />
        </div>

        {/* Descripción y detalles del producto */}
        <div style={styles.detailsSection}>
          <div style={styles.story}>
            <h3>Descripción</h3>
            <p>{product.descripcion}</p>
          </div>
          <button onClick={() => navigate(`/productos/edit/${product.id}`, { state: { product } })} style={styles.editButton}>
            Editar
          </button>
        </div>
      </div>

      {/* Botón de compra */}
      <button onClick={() => alert(`Compraste ${product.nombreProducto} por ${product.precio}`)} style={styles.buyButton}>
        Comprar
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f3eae3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  backButton: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  productMainInfo: {
    textAlign: 'left',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
  imageSection: {
    flex: 1,
    marginRight: '20px',
  },
  mainImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  detailsSection: {
    flex: 1,
  },
  story: {
    marginBottom: '20px',
  },
  buyButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#836953',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  editButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#5E5768',  
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default ProdDetail;
