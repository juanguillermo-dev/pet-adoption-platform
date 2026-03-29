import React from "react";
import { useNavigate } from "react-router-dom";

const Verificacion = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate("/"); 
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
          margin-bottom: 60px;
        }

      `}</style>
      <div>
        <h1>¡Su solicitud ha sido guardada!</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/8743/8743964.png"
          alt="icono email"
          style={{
            width: "150px",
            height: "150px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px"
          }}
        />
        <h3>Usted recibirá la respuesta a su petición a través de correo electrónico en un tiempo estimado de tres días hábiles.</h3>
        <button
          onClick={handleRedirect} 
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
          Volver al inicio
        </button>
      </div>
    </>
  );
};

export default Verificacion;
