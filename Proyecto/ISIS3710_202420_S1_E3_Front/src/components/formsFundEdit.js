import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormsFundEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/foundations/${id}`)
        .then(res => res.json())
        .then((data) => setFormData({...data}))
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;
    fetch(`http://localhost:8000/api/v1/foundations/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    })
        .then(res => {
          if (res.status !== 200) isError = true;
          return res.json()
        })
        .then(data => {
          if (isError) setError(data.message.toString());
          else {
            setError("");
            navigate(`/funds/${id}`);
          }
        });
  };

  return (
    <div className="container mt-5 p-4 rounded" style={formStyles.container}>
      <h1 className="text-center mb-4">Editar Información de Fundación</h1>
      <form onSubmit={handleSubmit} className="p-3">
        {error && <p style={{color: "red"}}>{error}</p>}
        {Object.keys(formData).filter(key => key !== "id").map((key) => (
          <div className="form-group mb-3" key={key} data-testid={key}>
            <label>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
            </label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="form-control"
              placeholder={`Ingrese ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
            />
          </div>
        ))}
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

export default FormsFundEdit;
