import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormsPetEdit = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombreActualizado: '',
    direccionActualizada: '',
    historiaActualizada: '',
    generoActualizado: 'Male', // Valor por defecto
    razaActualizada: '',
    edadActualizada: '',
    tamanoActualizado: 'Pequeño', // Valor por defecto
    vacunacionActualizada: 'Sí', // Valor por defecto
    fertilidadActualizada: 'Sí', // Valor por defecto
    microChipActualizado: 'Sí' // Valor por defecto
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.values(formData).some(value => value === '');
    if (emptyFields) {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
    } else {
      alert('El formulario ha sido enviado correctamente.');
      navigate('/pets');
    }
  };

  return (
    <div className="container mt-5 p-4 rounded" style={formStyles.container}>
      <h1 className="text-center mb-4">Editar Información de Mascota</h1>
      <form onSubmit={handleSubmit} className="p-3">
        {Object.keys(formData).map((key) => {
          if (key === 'tamanoActualizado') {
            return (
              <div className="form-group mb-3" key={key} data-testid={key}>
                <label>Tamaño:</label>
                <select
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Pequeño">Pequeño</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                </select>
              </div>
            );
          } else if (key === 'generoActualizado') {
            return (
              <div className="form-group mb-3" key={key} data-testid={key}>
                <label>Género:</label>
                <select
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            );
          } else if (['vacunacionActualizada', 'fertilidadActualizada', 'microChipActualizado'].includes(key)) {
            return (
              <div className="form-group mb-3" key={key} data-testid={key}>
                <label>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
                <select
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>
            );
          } else {
            return (
              <div className="form-group mb-3" key={key} data-testid={key}>
                <label>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="form-control"
                  placeholder={`Ingrese ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                />
              </div>
            );
          }
        })}
        <button
          type="submit"
          className="btn btn-block"
          style={formStyles.button}
        >
          Actualizar Información
        </button>
      </form>
    </div>
  );
};

// Estilos
const formStyles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f3eae3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  button: {
    padding: '10px',
    backgroundColor: '#34323C',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  }
};

export default FormsPetEdit;
