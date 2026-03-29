import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Importar el hook de internacionalización

const FormsInscripcion = () => {
  const { t } = useTranslation(); // Hook de traducción
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    otrasMascotas: "",
    experienciaCuidados: "",
    tiempoCuidado: "",
    capacidadAcogida: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const nombreRef = useRef();
  const correoRef = useRef();
  const telefonoRef = useRef();
  const direccionRef = useRef();
  const otrasMascotasRef = useRef();
  const experienciaCuidadosRef = useRef();
  const tiempoCuidadoRef = useRef();
  const capacidadAcogidaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhone = (telefono) => {
    const phoneRegex = /^[0-9]+$/;  
    return phoneRegex.test(telefono);
  };

  const validateForm = () => {
    let tempErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        tempErrors[key] = t('FormsInscripcion.errors.required'); // Texto traducido
      }
    });

    if (!validatePhone(formData.telefono)) {
      tempErrors["telefono"] = t('FormsInscripcion.errors.phone'); // Texto traducido
    }

    if (Object.keys(tempErrors).length > 0) {
      const firstErrorField = Object.keys(tempErrors)[0];
      switch (firstErrorField) {
        case "nombre":
          nombreRef.current.focus();
          break;
        case "correo":
          correoRef.current.focus();
          break;
        case "telefono":
          telefonoRef.current.focus();
          break;
        case "direccion":
          direccionRef.current.focus();
          break;
        case "otrasMascotas":
          otrasMascotasRef.current.focus();
          break;
        case "experienciaCuidados":
          experienciaCuidadosRef.current.focus();
          break;
        case "tiempoCuidado":
          tiempoCuidadoRef.current.focus();
          break;
        case "capacidadAcogida":
          capacidadAcogidaRef.current.focus();
          break;
        default:
          break;
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Datos del formulario:", formData);
      navigate("/verificacion");
    }
  };

  return (
    <>
      <style>{`
        body {
          background-color: #E7E2DF;
        }

        .container {
          width: 100%;
        }

        h1 {
          text-align: center;
          margin: 20px 0;
          margin-top: 100px;
          margin-bottom: 50px;
        }

        form {
          width: 100%;
        }

        form div {
          margin-bottom: 15px;
          padding: 0 40px; /* Márgenes laterales */
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-size: calc(8px + 2vmin);
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
        }

        button:hover {
          background-color: #333333;
        }

        span {
          color: red;
          font-size: calc(2px + 2vmin);
        }

        input:focus,
        textarea:focus {
          outline: none;
        }

        input.error,
        textarea.error {
          border-color: red;
        }
      `}</style>

      <div className="container">
        <h1>{t('FormsInscripcion.title')}</h1>
        <p style={{textAlign: "center", marginBottom: "30px", marginLeft: "100px", marginRight: "100px", fontSize: "calc(7px + 2vmin)"}}>
          {t('FormsInscripcion.description')}
        </p>

        <form data-testid="list" onSubmit={handleSubmit}>
          <div>
            <label>{t('FormsInscripcion.fields.name')}</label>
            <input
              type="text"
              data-testid="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              ref={nombreRef}
              className={errors.nombre ? "error" : ""}
            />
            {errors.nombre && <span>{errors.nombre}</span>}
          </div>

          <div>
            <label>{t('FormsInscripcion.fields.email')}</label>
            <input
              type="email"
              data-testid="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              ref={correoRef}
              className={errors.correo ? "error" : ""}
            />
            {errors.correo && <span>{errors.correo}</span>}
          </div>

          <div>
            <label>{t('FormsInscripcion.fields.phone')}</label>
            <input
              type="tel"
              name="telefono"
              data-testid="telefono"
              value={formData.telefono}
              onChange={handleChange}
              ref={telefonoRef}
              className={errors.telefono ? "error" : ""}
            />
            {errors.telefono && <span>{errors.telefono}</span>}
          </div>

          <div>
            <label>{t('FormsInscripcion.fields.address')}</label>
            <input
              type="text"
              name="direccion"
              data-testid="direccion"
              value={formData.direccion}
              onChange={handleChange}
              ref={direccionRef}
              className={errors.direccion ? "error" : ""}
            />
            {errors.direccion && <span>{errors.direccion}</span>}
          </div>

          <div>
            <label>{t('FormsInscripcion.fields.otherPets')}</label>
            <textarea
              name="otrasMascotas"
              value={formData.otrasMascotas}
              onChange={handleChange}
              ref={otrasMascotasRef}
              className={errors.otrasMascotas ? "error" : ""}
            />
            {errors.otrasMascotas && <span>{errors.otrasMascotas}</span>}
          </div>

          <div>
            <label>{t('FormsInscripcion.fields.experience')}</label>
            <textarea
              name="experienciaCuidados"
              value={formData.experienciaCuidados}
              onChange={handleChange}
              ref={experienciaCuidadosRef}
              className={errors.experienciaCuidados ? "error" : ""}
            />
            {errors.experienciaCuidados && <span>{errors.experienciaCuidados}</span>}
          </div>

          <div>
            <label>{t('FormsInscripcion.fields.careDuration')}</label>
            <textarea
              name="tiempoCuidado"
              value={formData.tiempoCuidado}
              onChange={handleChange}
              ref={tiempoCuidadoRef}
              className={errors.tiempoCuidado ? "error" : ""}
            />
            {errors.tiempoCuidado && <span>{errors.tiempoCuidado}</span>}
          </div>

          <div>
            <label>{t('FormsInscripcion.fields.capacity')}</label>
            <textarea
              name="capacidadAcogida"
              value={formData.capacidadAcogida}
              onChange={handleChange}
              ref={capacidadAcogidaRef}
              className={errors.capacidadAcogida ? "error" : ""}
            />
            {errors.capacidadAcogida && <span>{errors.capacidadAcogida}</span>}
          </div>

          <button
            type="submit"
            style={{
              width: "255px",
              height: "50px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "12px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            {t('FormsInscripcion.submitButton')}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormsInscripcion;
