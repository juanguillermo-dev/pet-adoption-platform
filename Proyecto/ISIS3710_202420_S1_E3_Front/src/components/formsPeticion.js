import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Importar el hook para internacionalización
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de Bootstrap para estilos
import Verificacion from "./verificacion";


const FormsPeticion = () => {
  const { t } = useTranslation(); // Hook de traducción
  const navigate = useNavigate(); // Para redirigir después de un envío exitoso

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    descripcionTexto: "",
    descripcionImagen: null,
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleVerification = () => {
    setShowVerification(true);
  };

  const closeModals = () => {
    setShowVerification(false);
  };


  const refs = {
    nombre: useRef(null),
    correo: useRef(null),
    telefono: useRef(null),
    direccion: useRef(null),
    descripcionTexto: useRef(null),
    descripcionImagen: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      descripcionImagen: e.target.files[0],
    });
  };

  const validatePhone = (telefono) => {
    const phoneRegex = /^[0-9]+$/;  
    return phoneRegex.test(telefono);
  };

  const validateForm = () => {
    let tempErrors = {};
    let firstErrorRef = null; 

    Object.keys(formData).forEach((key) => {
      if (key === "descripcionTexto" || key === "descripcionImagen") {
        if (!formData.descripcionTexto && !formData.descripcionImagen) {
          tempErrors["descripcion"] = t('FormsPeticion.errors.description');
          firstErrorRef = refs.descripcionTexto;
        }
      } else if (!formData[key]) {
        tempErrors[key] = t('FormsPeticion.errors.required');
        firstErrorRef = refs[key]; 
      }
    });

    if (!validatePhone(formData.telefono)) {
      tempErrors["telefono"] = t('FormsPeticion.errors.phone');
      firstErrorRef = refs.telefono; 
    }

    setErrors(tempErrors);
    return { isValid: Object.keys(tempErrors).length === 0, firstErrorRef };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, firstErrorRef } = validateForm();

    if (isValid) {
      console.log("Datos del formulario:", formData);
      setSuccessMessage(t('FormsPeticion.success'));
      setErrorMessage('');
      navigate("/verificacion"); // Redirigir a la página de verificación
    } else if (firstErrorRef) {
      setErrorMessage(t('FormsPeticion.errors.general'));
      firstErrorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      firstErrorRef.current.focus(); 
    }
  };

  return (
    <>
    <div className="container mt-5">
      <h2 className="text-center" style={{marginTop: "100px", marginBottom: "50px"}}>{t('FormsPeticion.title')}</h2>
      <p style={{textAlign: "center", marginBottom: "30px", marginLeft: "100px", marginRight: "100px", fontSize: "calc(7px + 2vmin)"}}>
        {t('FormsPeticion.description')}
      </p>

      <form data-testid="send-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nombre">{t('FormsPeticion.fields.name')}</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              data-testid="nombre"
              name="nombre"
              ref={refs.nombre}
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <span className="text-danger">{errors.nombre}</span>}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="correo">{t('FormsPeticion.fields.email')}</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              data-testid="correo"
              name="correo"
              ref={refs.correo}
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && <span className="text-danger">{errors.correo}</span>}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="telefono">{t('FormsPeticion.fields.phone')}</label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              data-testid="telefono"
              name="telefono"
              ref={refs.telefono}
              value={formData.telefono}
              onChange={handleChange}
            />
            {errors.telefono && <span className="text-danger">{errors.telefono}</span>}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="direccion">{t('FormsPeticion.fields.address')}</label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              data-testid="direccion"
              name="direccion"
              ref={refs.direccion}
              value={formData.direccion}
              onChange={handleChange}
            />
            {errors.direccion && <span className="text-danger">{errors.direccion}</span>}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="descripcionTexto">{t('FormsPeticion.fields.description')}</label>
          <textarea
            className="form-control"
            id="descripcionTexto"
            data-testid="descripcionTexto"
            name="descripcionTexto"
            ref={refs.descripcionTexto}
            value={formData.descripcionTexto}
            onChange={handleChange}
          ></textarea>
          <input
            type="file"
            className="form-control"
            id="descripcionImagen"
            data-testid="descripcionImagen"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {errorMessage && <p data-testid="text-danger" className="text-danger">{errorMessage}</p>}
        {successMessage && <p data-testid="text-success" className="text-success">{successMessage}</p>}

        <button type="submit" className="btn btn-primary btn-block">
          {t('FormsPeticion.submitButton')}, {onclick= () => handleVerification(true)}
        </button>
      </form>
    </div>

      <Verificacion isOpen={showVerification} onRequestClose={closeModals} />
    </>
  );
};

export default FormsPeticion;
