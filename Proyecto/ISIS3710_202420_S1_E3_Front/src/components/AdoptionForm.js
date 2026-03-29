import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next'; // Importamos el hook de i18next

const AdoptionForm = () => {
  const { t } = useTranslation(); // Hook de traducción
  const navigate = useNavigate();

  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    mascotasEnCasa: '',
    personasHogar: '',
    alergias: '',
    mascotasAntes: '',
    motivoAdopcion: '',
    costosVeterinarios: '',
    visitaSeguimiento: ''
  });

  // Maneja el cambio en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validar y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.values(formData).some(value => value === '');
    if (emptyFields) {
      alert(t('AdoptionForm.errorCompleteFields')); // Mensaje traducido
    } else {
      alert(t('AdoptionForm.successMessage')); // Mensaje traducido
      navigate('/pets');
    }
  };

  return (
    <div className="container mt-5 p-4 rounded" style={formStyles.container}>
      <h1 className="text-center mb-4" style={formStyles.title}>{t('AdoptionForm.title')}</h1>
      <form onSubmit={handleSubmit} className="p-3" style={formStyles.form}>
        
        {/* Primera fila */}
        <div className="form-group" style={formStyles.flexRow}>
          <label style={formStyles.label}>{t('AdoptionForm.mascotasEnCasa')}</label>
          <input
            type="text"
            name="mascotasEnCasa"
            data-testid="AdoptionForm.mascotasEnCasa"
            value={formData.mascotasEnCasa}
            onChange={handleChange}
            className="form-control"
            style={formStyles.input}
          />
        </div>
        
        {/* Segunda fila */}
        <div className="form-group" style={formStyles.flexRow}>
          <label style={formStyles.label}>{t('AdoptionForm.personasHogar')}</label>
          <input
            type="text"
            name="personasHogar"
            data-testid="AdoptionForm.personasHogar"
            value={formData.personasHogar}
            onChange={handleChange}
            className="form-control"
            style={formStyles.input}
          />
        </div>

        {/* Tercera fila */}
        <div className="form-group" style={formStyles.flexRow}>
          <label style={formStyles.label}>{t('AdoptionForm.alergias')}</label>
          <input
            type="text"
            name="alergias"
            data-testid="AdoptionForm.alergias"
            value={formData.alergias}
            onChange={handleChange}
            className="form-control"
            style={formStyles.input}
          />
        </div>

        {/* Cuarta fila */}
        <div className="form-group" style={formStyles.flexRow}>
          <label style={formStyles.label}>{t('AdoptionForm.mascotasAntes')}</label>
          <input
            type="text"
            name="mascotasAntes"
            data-testid="AdoptionForm.mascotasAntes"
            value={formData.mascotasAntes}
            onChange={handleChange}
            className="form-control"
            style={formStyles.input}
          />
        </div>

        {/* Quinta fila */}
        <div className="form-group" style={formStyles.flexRow}>
          <label style={formStyles.label}>{t('AdoptionForm.motivoAdopcion')}</label>
          <input
            type="text"
            name="motivoAdopcion"
            data-testid="AdoptionForm.motivoAdopcion"
            value={formData.motivoAdopcion}
            onChange={handleChange}
            className="form-control"
            style={formStyles.input}
          />
        </div>

        {/* Sexta fila */}
        <div className="form-group" style={formStyles.flexRow}>
          <label style={formStyles.label}>{t('AdoptionForm.costosVeterinarios')}</label>
          <input
            type="text"
            name="costosVeterinarios"
            value={formData.costosVeterinarios}
            data-testid="AdoptionForm.costosVeterinarios"
            onChange={handleChange}
            className="form-control"
            style={formStyles.input}
          />
        </div>

        {/* Séptima fila */}
        <div className="form-group mb-5" style={formStyles.flexRow}>
          <label style={formStyles.label}>{t('AdoptionForm.visitaSeguimiento')}</label>
          <input
            type="text"
            name="visitaSeguimiento"
            data-testid="AdoptionForm.visitaSeguimiento"
            value={formData.visitaSeguimiento}
            onChange={handleChange}
            className="form-control"
            style={formStyles.input}
          />
        </div>

        <button
          type="submit"
          className="btn btn-block"
          style={formStyles.button}
          data-testid="submit"
        >
          {t('AdoptionForm.submit')}
        </button>
      </form>
    </div>
  );
};

// Estilos
const formStyles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#f4f0ec',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#34323C',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '30px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#34323C',
    width: '40%',
  },
  input: {
    flex: '1',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '15px',
    backgroundColor: '#34323C',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '18px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  }
};

export default AdoptionForm;
