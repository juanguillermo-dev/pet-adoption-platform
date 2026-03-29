import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProdList = () => {
  // Datos de prueba con imágenes
  const mockProducts = [
    { id: 1, nombreProducto: 'Collar para perros', disponibleEn: 'Bogotá', descripcion: 'Un collar resistente y cómodo para perros.', precio: 15000, imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombreProducto: 'Cama para gatos', disponibleEn: 'Medellín', descripcion: 'Una cama suave y acogedora para gatos.', precio: 30000, imagen: 'https://via.placeholder.com/150' },
    { id: 3, nombreProducto: 'Juguete para mascotas', disponibleEn: 'Cali', descripcion: 'Un juguete interactivo para perros y gatos.', precio: 12000, imagen: 'https://via.placeholder.com/150' },
    { id: 4, nombreProducto: 'Comida para perros', disponibleEn: 'Bogotá', descripcion: 'Alimento balanceado para perros adultos.', precio: 50000, imagen: 'https://via.placeholder.com/150' },
    { id: 5, nombreProducto: 'Arena para gatos', disponibleEn: 'Medellín', descripcion: 'Arena absorbente de alta calidad para gatos.', precio: 18000, imagen: 'https://via.placeholder.com/150' },
    { id: 6, nombreProducto: 'Rascador para gatos', disponibleEn: 'Cali', descripcion: 'Un rascador de madera para gatos.', precio: 25000, imagen: 'https://via.placeholder.com/150' },
    { id: 7, nombreProducto: 'Correa para perros', disponibleEn: 'Bogotá', descripcion: 'Una correa extensible para perros.', precio: 20000, imagen: 'https://via.placeholder.com/150' },
    { id: 8, nombreProducto: 'Jaula para transporte', disponibleEn: 'Medellín', descripcion: 'Jaula para transportar mascotas de manera segura.', precio: 40000, imagen: 'https://via.placeholder.com/150' },
    { id: 9, nombreProducto: 'Shampoo para mascotas', disponibleEn: 'Cali', descripcion: 'Shampoo especial para pieles sensibles de perros y gatos.', precio: 10000, imagen: 'https://via.placeholder.com/150' },
  ];

  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = products.filter((product) =>
      product.nombreProducto.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset page to 1 after filtering
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explora nuestros productos para mascotas</h2>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button
            onClick={() => navigate('/add-product')}
            style={{
              width: '10%',
              padding: '10px 0',
              backgroundColor: 'transparent',
              color: '#5e5768',
              borderRadius: '10px',
              border: '1px solid #5e5768',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#5e5768';
              e.target.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#5e5768';
            }}
          >
            Agrega tu producto
          </button>
        </div>
      {/* Barra de búsqueda */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre de producto"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Cuadrícula de productos */}
      <div data-testid='list' className="row">
        {currentItems.length > 0 ? (
          currentItems.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm" style={{ backgroundColor: '#d9c2b0' }}>
                <img
                  src={product.imagen}
                  alt={product.nombreProducto}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.nombreProducto}</h5>
                  <p className="card-text">
                    <strong>Disponible en:</strong> {product.disponibleEn}
                  </p>
                  <p className="card-text">
                    <strong>Descripción:</strong> {product.descripcion}
                  </p>
                  <p className="card-text">
                    <strong>Precio:</strong> ${product.precio}
                  </p>
                </div>
                <div className="card-footer text-center">
                <button
                  onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                  className="btn btn-outline-dark"
                >
                  Más información
                </button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos que coincidan con la búsqueda.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="d-flex justify-content-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-outline-secondary mx-2"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`btn mx-1 ${currentPage === index + 1 ? 'btn-dark' : 'btn-outline-secondary'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-outline-secondary mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProdList;
