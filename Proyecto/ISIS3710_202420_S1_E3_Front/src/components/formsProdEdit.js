import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormsProdEdit = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombreProductoActualizado: '',
    disponibleEnActualizado: '',
    descripcionActualizada: '',
    precioActualizado: '',
    imagenActualizada: null, // Aquí almacenamos el archivo de imagen
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Solo un archivo
    setFormData((prevData) => ({
      ...prevData,
      imagenActualizada: file, // Guardamos el archivo de imagen
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.values(formData).some((value) => value === '' || value === null);
    if (emptyFields) {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
    } else {
      alert('El formulario ha sido enviado correctamente.');
      navigate('/productos');
    }
  };

  return (
    <div className="container mt-5 p-4 rounded" style={formStyles.container}>
      <h1 className="text-center mb-4">Editar Información del Producto</h1>
      <form onSubmit={handleSubmit} className="p-3">
        <div className="form-group mb-3">
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="nombreProductoActualizado"
            value={formData.nombreProductoActualizado}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese el nombre del producto"
          />
        </div>

        <div className="form-group mb-3">
          <label>Ciudad Disponible:</label>
          <input
            type="text"
            name="disponibleEnActualizado"
            value={formData.disponibleEnActualizado}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese la ciudad"
          />
        </div>

        <div className="form-group mb-3">
          <label>Descripción:</label>
          <textarea
            name="descripcionActualizada"
            value={formData.descripcionActualizada}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese la descripción del producto"
            rows="3"
          />
        </div>

        <div className="form-group mb-3">
          <label>Precio:</label>
          <input
            type="number"
            name="precioActualizado"
            value={formData.precioActualizado}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese el precio"
          />
        </div>

        <div className="form-group mb-3">
          <label>Imagen del Producto:</label>
          <input
            type="file"
            name="imagenActualizada"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>

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
  },
};

export default FormsProdEdit;
