import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FundacionModal from './FundacionModal'; // Asegúrate de que la ruta sea correcta

const FundList = () => {
  const [funds, setFunds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  const navigate = useNavigate();

  const fetchFunds = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/foundations', {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        }
      });
      const data = await response.json();

      console.log('Datos de fundaciones:', data);

      if (Array.isArray(data)) {
        setFunds(data);
      } else {
        console.error('No se encontraron fundaciones o los datos no son válidos.');
      }
    } catch (error) {
      console.error('Error al obtener las fundaciones:', error);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = funds.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(funds.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setIsModalOpen(true); // Abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
    fetchFunds();
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#E7E2DF' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Buscar por nombre de fundación"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: '100%', padding: '15px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <h2 style={{ textAlign: 'center', color: '#333' }}>Busca fundaciones para adopción</h2>
        <div
        data-testid = 'list'
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {currentItems.map((fund) => (
            <div key={fund.id} style={{
              borderRadius: '15px',
              backgroundColor: '#d9c2b0',
              padding: '20px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '300px',
              textAlign: 'left',
            }}>
              <div>
                <h3 style={{ margin: '10px 0', color: '#5e5768', fontSize: '20px', fontWeight: 'bold', textAlign: 'left' }}>{fund.name || "Nombre no disponible"}</h3>

                {/* Espacio para la imagen */}
                <div style={{ width: '100%', height: '150px', backgroundColor: '#e0e0e0', margin: '10px 0', borderRadius: '10px', position: "relative" }}>
                  <img src={`${fund.image}?nocache=${fund.id}`} style={{objectFit: "cover", height: "100%", width: "100%"}} alt={fund.name + ' Logo'}/>
                </div>

                <p style={{ color: '#6B7280', fontWeight: '500', marginBottom: '5px', textAlign: 'left' }}>{fund.city || "No disponible"}</p>
              </div>
              <button
                onClick={() => navigate(`/funds/${fund.id}`, { state: { fund } })}
                style={{
                  width: '100%',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  border: '1px solid #5e5768',
                  backgroundColor: 'transparent',
                  color: '#5e5768',
                  cursor: 'pointer',
                  marginTop: 'auto',
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
                Más información
              </button>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: '#ddd', cursor: 'pointer' }}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: currentPage === index + 1 ? '#5e5768' : '#ddd', color: currentPage === index + 1 ? '#fff' : '#000', cursor: 'pointer' }}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: '#ddd', cursor: 'pointer' }}
          >
            Next
          </button>
        </div>

        {/* Botón para inscribir fundación */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={openModal} // Abrir el modal al hacer clic
            style={{
              padding: '10px 15px',
              borderRadius: '5px',
              border: '1px solid #5e5768',
              backgroundColor: '#5e5768',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Inscribir Fundación
          </button>
        </div>

        {/* Modal para inscribir fundación */}
        <FundacionModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
};

export default FundList;
