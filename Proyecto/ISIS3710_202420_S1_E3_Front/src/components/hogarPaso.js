import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Importamos el hook para internacionalización

const HogarPaso = () => {
  const { t } = useTranslation(); // Hook de traducción
  const navigate = useNavigate(); 

  const redirectFormsPeticion = () => {
    navigate("/peticiones-hogar"); 
  };

  const redirectFormsInscripcion = () => {
    navigate("/hogar-inscribir"); 
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
          margin-top: 120px;
          margin-bottom: 40px;
        }

        h3 {
          margin-left: 80px;
          margin-right: 80px;
          margin-bottom: 60px;
        }

      `}</style>
      <div>
        <h1><b>{t('HogarPaso.title')}</b></h1>
        <img
          src="https://img.freepik.com/free-vector/everyday-scene-with-pets_23-2148521070.jpg?t=st=1727898289~exp=1727901889~hmac=b82ab6eb8297281c07cda1351ff614717e9b9528b146a4604a6f188397ab553c&w=740"
          alt="imagen hogar de paso"
          style={{
            width: "600px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px",
            borderWidth: "100px"
          }}
        />
        <h3>{t('HogarPaso.petitionInfo')}</h3>
        <button
          onClick={redirectFormsPeticion} 
          style={{
            width: "255px",
            height: "50px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "12px",
            marginBottom: "60px",
            fontSize: "calc(4px + 2vmin)"
          }}
        >
          {t('HogarPaso.sendPetitionButton')}
        </button>
        <h3>{t('HogarPaso.careInfo')}</h3>
        <button
          onClick={redirectFormsInscripcion} 
          style={{
            width: "255px",
            height: "50px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "12px",
            marginBottom: "60px",
            fontSize: "calc(4px + 2vmin)"
          }}
        >
          {t('HogarPaso.registerHomeButton')}
        </button>
      </div>
    </>
  );
};

export default HogarPaso;
