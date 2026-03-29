import React, { useState, useEffect } from 'react';

const mockPets = [
  { id: 1, name: 'Lola', species: 'Perro', breed: 'Golden Retriever', age: '2 años', size: 'Grande', image: 'lola.jpg', family: 'Familia A' },
  { id: 2, name: 'Maggie', species: 'Perro', breed: 'Bulldog', age: '1 año', size: 'Mediano', image: 'maggie.jpg', family: 'Familia A' },
  { id: 3, name: 'Snoopy', species: 'Perro', breed: 'Beagle', age: '3 años', size: 'Pequeño', image: 'snoopy.jpg', family: 'Familia B' },
  { id: 4, name: 'Cheshire', species: 'Gato', breed: 'Maine Coon', age: '4 años', size: 'Grande', image: 'cheshire.jpg', family: 'Familia C' },
  { id: 5, name: 'Nala', species: 'Gato', breed: 'Siamés', age: '2 años', size: 'Mediano', image: 'nala.jpg', family: 'Familia C' }
];

const PetList = () => {
  const [pets, setPets] = useState(mockPets);
  const [filteredPets, setFilteredPets] = useState(mockPets);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    species: '',
    breed: '',
    age: '',
    size: ''
  });

  useEffect(() => {
    let filtered = pets;

    if (filters.species) {
      filtered = filtered.filter((pet) => pet.species.toLowerCase().includes(filters.species.toLowerCase()));
    }

    if (filters.breed) {
      filtered = filtered.filter((pet) => pet.breed.toLowerCase().includes(filters.breed.toLowerCase()));
    }

    if (filters.age) {
      filtered = filtered.filter((pet) => pet.age.toLowerCase().includes(filters.age.toLowerCase()));
    }

    if (filters.size) {
      filtered = filtered.filter((pet) => pet.size.toLowerCase().includes(filters.size.toLowerCase()));
    }

    if (searchTerm) {
      filtered = filtered.filter((pet) => pet.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredPets(filtered);
  }, [filters, searchTerm, pets]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const groupedPets = filteredPets.reduce((groups, pet) => {
    const { family } = pet;
    if (!groups[family]) {
      groups[family] = [];
    }
    groups[family].push(pet);
    return groups;
  }, {});

  return (
    <div className="pet-list-container">
      <h2>Lista de mascotas disponibles para adopción</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {/* Filtros */}
      <div className="filters">
        <select name="species" value={filters.species} onChange={handleFilterChange}>
          <option value="">Especie</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </select>

        <select name="breed" value={filters.breed} onChange={handleFilterChange}>
          <option value="">Raza</option>
          <option value="Golden Retriever">Golden Retriever</option>
          <option value="Bulldog">Bulldog</option>
          <option value="Beagle">Beagle</option>
          <option value="Maine Coon">Maine Coon</option>
          <option value="Siamés">Siamés</option>
        </select>

        <select name="age" value={filters.age} onChange={handleFilterChange}>
          <option value="">Edad</option>
          <option value="1 año">1 año</option>
          <option value="2 años">2 años</option>
          <option value="3 años">3 años</option>
          <option value="4 años">4 años</option>
        </select>

        <select name="size" value={filters.size} onChange={handleFilterChange}>
          <option value="">Tamaño</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
      </div>

      {/* Listado de mascotas agrupadas por familia */}
      <div data-testid='list' className="pet-grid">
        {Object.keys(groupedPets).map((family) => (
          <div data-testid='family-group' key={family} className="family-group">
            <h3>{family}</h3>
            <div className="pet-row">
              {groupedPets[family].map((pet) => (
                <div data-testid='pet-card' key={pet.id} className="pet-card">
                  <img src={pet.image} alt={pet.name} />
                  <h4>{pet.name}</h4>
                  <p>Especie: {pet.species}</p>
                  <p>Raza: {pet.breed}</p>
                  <p>Edad: {pet.age}</p>
                  <p>Tamaño: {pet.size}</p>
                  <button onClick={() => console.log(`Ver detalles de ${pet.name}`)}>
                    Más información
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
