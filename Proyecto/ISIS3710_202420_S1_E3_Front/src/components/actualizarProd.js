import React, { useState } from 'react';

const ActualizarProd = ({ producto, onSave }) => {
  const [imagen, setImagen] = useState(producto.imagen);
  const [nombre, setNombre] = useState(producto.nombre);
  const [precio, setPrecio] = useState(producto.precio);
  const [desc, setDesc] = useState(producto.desc);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const cambiarImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!nombre || !precio || !desc) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (isNaN(precio)) {
      setError("El precio debe ser un número.");
      return;
    }

    setError("");
    onSave({
      ...producto,
      imagen,
      nombre,
      precio,
      desc,
    });
    setSuccess("Producto actualizado con éxito.");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Imagen:</label>
        <input
          type="file"
          accept="image/*"
          onChange={cambiarImg}
          data-testid="imagenActualizada"
        />
        <div style={{ marginTop: '10px' }}>
          <img src={imagen} alt="Producto" style={{ maxWidth: '100%' }} data-testid="imagenPreview" />
        </div>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          data-testid="nombreActualizado"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          data-testid="precioActualizado"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Descripción:</label>
        <textarea
          rows="4"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          data-testid="descActualizada"
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
      <button onClick={handleSave} data-testid="botonGuardar">Save Changes</button>
    </div>
  );
};

export default ActualizarProd;
