import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importar el hook para internacionalización
import 'bootstrap/dist/css/bootstrap.min.css';

const PetList = () => {
  const { t } = useTranslation(); // Hook de traducción
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    species: '',
    location: '',
    size: '',
    breed: '',
    color: '',
    gender: '',
    ageRange: ''
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/pets');
        const data = await response.json();

        if (Array.isArray(data)) {
          console.log('Datos de la API:', data);
          setFilteredPets(data);
          setCurrentPage(1);
        } else {
          console.error('La respuesta no es un array:', data);
        }
      } catch (error) {
        console.error('Error al obtener las mascotas:', error);
      }
    };
    fetchPets();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    let filtered = filteredPets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filters.species) {
      filtered = filtered.filter((pet) => pet.species === filters.species);
    }

    if (filters.location) {
      filtered = filtered.filter((pet) => pet.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.size) {
      filtered = filtered.filter((pet) => pet.size === filters.size);
    }

    if (filters.breed) {
      filtered = filtered.filter((pet) => pet.breed === filters.breed);
    }

    if (filters.color) {
      filtered = filtered.filter((pet) => pet.color === filters.color);
    }

    if (filters.gender && filters.gender !== 'Todos') {
      filtered = filtered.filter((pet) => pet.gender === filters.gender);
    }

    if (filters.ageRange) {
      if (filters.ageRange === t('PetList.young')) {
        filtered = filtered.filter((pet) => parseInt(pet.age) <= 12);
      } else if (filters.ageRange === t('PetList.adult')) {
        filtered = filtered.filter((pet) => parseInt(pet.age) > 12 && parseInt(pet.age) <= 60);
      } else if (filters.ageRange === t('PetList.senior')) {
        filtered = filtered.filter((pet) => parseInt(pet.age) > 60);
      }
    }

    setFilteredPets(filtered);
  };

  const handleSpeciesFilter = (species) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      species
    }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(filteredPets) && filteredPets.length > 0
    ? filteredPets.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const totalPages = Math.ceil(Array.isArray(filteredPets) ? filteredPets.length / itemsPerPage : 0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#E7E2DF' }}>
      <aside style={{
        width: '250px',
        padding: '20px',
        backgroundColor: '#E7E2DF',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button
            data-testid= "cat_button"
            onClick={() => handleSpeciesFilter('Gato')}
            style={{
              backgroundColor: filters.species === 'Gato' ? '#d9c2b0' : 'transparent',
              padding: '10px 20px',
              borderRadius: '50%',
              border: '1px solid #d9c2b0',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: filters.species === 'Gato' ? '#fff' : '#d9c2b0'
            }}>
            🐱
            <span style={{ marginTop: '5px' }}>{t('PetList.cats')}</span>
          </button>
          <button
            data-testid= "dog_button"
            onClick={() => handleSpeciesFilter('Perro')}
            style={{
              backgroundColor: filters.species === 'Perro' ? '#d9c2b0' : 'transparent',
              padding: '10px 20px',
              borderRadius: '50%',
              border: '1px solid #d9c2b0',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: filters.species === 'Perro' ? '#fff' : '#d9c2b0'
            }}>
            🐶
            <span style={{ marginTop: '5px' }}>{t('PetList.dogs')}</span>
          </button>
        </div>
            
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>{t('PetList.location')}</h4>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder={t('PetList.enterLocation')}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>{t('PetList.size')}</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={() => handleFilterChange({ target: { name: 'size', value: 'Pequeño' } })}
              style={{
                padding: '10px',
                backgroundColor: filters.size === 'Pequeño' ? '#d9c2b0' : 'transparent',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '30%',
                border: '1px solid #d9c2b0',
              }}>
              {t('PetList.small')}
            </button>
            <button
              onClick={() => handleFilterChange({ target: { name: 'size', value: 'Mediano' } })}
              style={{
                padding: '10px',
                backgroundColor: filters.size === 'Mediano' ? '#d9c2b0' : 'transparent',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '30%',
                border: '1px solid #d9c2b0',
              }}>
              {t('PetList.medium')}
            </button>
            <button
              onClick={() => handleFilterChange({ target: { name: 'size', value: 'Grande' } })}
              style={{
                padding: '10px',
                backgroundColor: filters.size === 'Grande' ? '#d9c2b0' : 'transparent',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '30%',
                border: '1px solid #d9c2b0',
              }}>
              {t('PetList.large')}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>{t('PetList.breed')}</h4>
          <select
            name="breed"
            value={filters.breed}
            onChange={handleFilterChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">{t('PetList.selectOption')}</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Scottish">Scottish</option>
            <option value="Labrador">Labrador</option>
            <option value="Beagle">Beagle</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>{t('PetList.color')}</h4>
          <select
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">{t('PetList.selectOption')}</option>
            <option value="Golden">Golden</option>
            <option value="Gray">Gray</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Brown">Brown</option>
            <option value="Other">{t('PetList.other')}</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>{t('PetList.gender')}</h4>
          <select
            data-testid= "pet_gender"
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">{t('PetList.selectOption')}</option>
            <option value="Hembra">{t('PetList.female')}</option>
            <option value="Macho">{t('PetList.male')}</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>{t('PetList.age')}</h4>
          <select
            name="ageRange"
            value={filters.ageRange}
            onChange={handleFilterChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">{t('PetList.selectOption')}</option>
            <option value={t('PetList.young')}>{t('PetList.young')}</option>
            <option value={t('PetList.adult')}>{t('PetList.adult')}</option>
            <option value={t('PetList.senior')}>{t('PetList.senior')}</option>
          </select>
        </div>

        <button
          onClick={applyFilters}
          style={{
            width: '100%',
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
          {t('PetList.applyFilters')}
        </button>

        <p
          data-testid = "set-filters"
          onClick={() => setFilters({
            species: '',
            location: '',
            size: '',
            breed: '',
            color: '',
            gender: '',
            ageRange: ''
          })}
          style={{
            marginTop: '10px',
            textAlign: 'center',
            color: '#5e5768',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
        >
          {t('PetList.clearFilters')}
        </p>
      </aside>

      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder={t('PetList.searchByName')}
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: '100%', padding: '15px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <h2 style={{ textAlign: 'center', color: '#333' }}>{t('PetList.findAdoptablePets')}</h2>

        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button
            onClick={() => navigate('/add-pet')}
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
            {t('PetList.addPet')}
          </button>
        </div>

        <div
  data-testid="list"
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columnas para mostrar más tarjetas
    gap: '15px', // Espacio entre las tarjetas
    padding: '10px',
  }}
>
  {currentItems.map((pet) => (
    <div
      key={pet.id}
      style={{
        borderRadius: '15px',
        backgroundColor: '#d9c2b0',
        padding: '15px',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '250px', // Ajuste para hacer las tarjetas más compactas
        textAlign: 'left',
      }}
    >
      <div>
        <img
          src={pet.photo}
          alt={pet.name}
          style={{
            width: '100%',
            height: '400px', // Hacer la imagen un poco más pequeña
            
            objectFit: 'cover',
            borderRadius: '15px',
            marginBottom: '15px',
          }}
        />
        <h3
          style={{
            margin: '10px 0',
            color: '#5e5768',
            fontSize: '30px', // Tamaño de fuente reducido para ajustarse al nuevo diseño
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          {pet.name}
        </h3>
        <p
          style={{
            color: '#6B7280',
            fontWeight: '500',
            marginBottom: '30px',
            textAlign: 'left',
          }}
        >
          {pet.location}
        </p>
        <div
          data-testid="card-gender"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '20px', // Ajuste de tamaño de fuente
            marginBottom: '10px',
          }}
        >
          <p>
            <strong>{t('PetList.gender')}: </strong>
            {pet.gender}
          </p>
          <p>
            <strong>{t('PetList.breed')}: </strong>
            {pet.breed}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '20px', // Ajuste de tamaño de fuente
            marginBottom: '10px',
          }}
        >
          <p>
            <strong>{t('PetList.age')}: </strong>
            {pet.age}
          </p>
          <p>
            <strong>{t('PetList.size')}: </strong>
            {pet.size}
          </p>
        </div>
        <p
          style={{
            margin: '10px 0',
            color: '#4B5563',
            textAlign: 'left',
            fontSize: '20px', // Ajuste de tamaño de fuente
          }}
        >
          {pet.description}
        </p>
      </div>
      <button
        onClick={() => navigate(`/pets/${pet.id}`, { state: { pet } })}
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
        {t('PetList.moreInfo')}
      </button>
    </div>
  ))}
</div>






<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: '#ddd', cursor: 'pointer' }}
  >
    {t('PetList.prev')}
  </button>
  
  {/* Lógica para mostrar los números de página con puntos suspensivos */}
  {[...Array(totalPages)].map((_, index) => {
    const pageNumber = index + 1;
    const showPageNumber = (
      pageNumber <= 3 || // Mostrar las primeras 3 páginas
      pageNumber === currentPage || // Mostrar la página actual
      pageNumber > totalPages - 3 || // Mostrar las últimas 3 páginas
      (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2) // Mostrar páginas alrededor de la actual
    );

    if (showPageNumber) {
      return (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          style={{
            margin: '0 5px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: currentPage === pageNumber ? '#5e5768' : '#ddd',
            color: currentPage === pageNumber ? '#fff' : '#000',
            cursor: 'pointer',
          }}
        >
          {pageNumber}
        </button>
      );
    }

    // Mostrar puntos suspensivos si hay páginas que omitir
    if (pageNumber === 4 && currentPage > 5) {
      return (
        <span key="dots" style={{ margin: '0 5px', padding: '10px 15px', color: '#000' }}>
          ...
        </span>
      );
    }

    if (pageNumber === totalPages - 3 && currentPage < totalPages - 4) {
      return (
        <span key="dots" style={{ margin: '0 5px', padding: '10px 15px', color: '#000' }}>
          ...
        </span>
      );
    }

    return null; // No renderizar nada si no se cumple ninguna condición
  })}

  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: '#ddd', cursor: 'pointer' }}
  >
    {t('PetList.next')}
  </button>
</div>

      </div>
    </div>
  );
}

export default PetList;
