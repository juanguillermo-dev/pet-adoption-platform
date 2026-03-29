import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importamos el hook para internacionalización

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Obtenemos la función 't' para acceder a las traducciones

  return (
    <div>
      <section style={styles.welcomeSection}>
        <img
          src="https://cms.beaus.org.au/img/assets/images/dog-laying-down-01.png?w=1920&q=80&crop=focal"
          alt="perro acostado"
          style={{
            width: "900px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            borderWidth: "100px"
          }}
        />
        <h1>{t('HomePage.welcomeTitle')}</h1> {/* Clave de traducción para el título */}
        <p>{t('HomePage.welcomeMessage')}</p> {/* Clave de traducción para el mensaje */}
        <div style={styles.stats}>
          <div>
            <h2 style={styles.statNumber}>544</h2>
            <p>{t('HomePage.loveStats')}</p> {/* Clave de traducción para estadísticas */}
          </div>
          <div>
            <h2 style={styles.statNumber}>756</h2>
            <p>{t('HomePage.adoptedStats')}</p> {/* Clave de traducción para estadísticas */}
          </div>
          <div>
            <h2 style={styles.statNumber}>420</h2>
            <p>{t('HomePage.rescuedStats')}</p> {/* Clave de traducción para estadísticas */}
          </div>
        </div>
      </section>

      <section style={styles.promotionSection}>
        <img
          src="/imagenes/ofertas.png"
          alt="oferta productos"
          style={{
            width: "800px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px",
            borderWidth: "100px"
          }}
        />
        <button style={styles.button} onClick={() => navigate('/productos')}>
          {t('HomePage.viewProducts')}
        </button> {/* Clave de traducción para botón */}
      </section>

      <section style={styles.adoptionSection}>
        <img
          src="/imagenes/perrito.png"
          alt="perro en adopcion"
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
        <h2>{t('HomePage.adoptionQuestion')}</h2> {/* Clave de traducción para la pregunta */}
        <p>{t('HomePage.adoptionInvite')}</p> {/* Clave de traducción para la invitación */}
        <button style={styles.button} onClick={() => navigate('/adopcion')}>
          {t('HomePage.adoptPets')}
        </button> {/* Clave de traducción para botón */}
      </section>

      <section style={styles.productsSection}>
        <img
          src="https://img.freepik.com/free-photo/sportive-dog-performing-lure-coursing-competition_155003-42635.jpg?t=st=1727901136~exp=1727904736~hmac=ff3cc3ded7d11a53dc83fc7ec1c8ad810a5cfe6946ce80c14757ea71d58db91b&w=740"
          alt="productos en venta"
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
        <h2>{t('HomePage.productTitle')}</h2> {/* Clave de traducción para el título */}
        <p>{t('HomePage.productDescription')}</p> {/* Clave de traducción para la descripción */}
        <button style={styles.button} onClick={() => navigate('/productos')}>
          {t('HomePage.productsOnSale')}
        </button> {/* Clave de traducción para botón */}
      </section>

      <section style={styles.homesSection}>
        <img
          src="/imagenes/hogarpaso.png"
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
        <h2>{t('HomePage.fosterHomeTitle')}</h2> {/* Clave de traducción para el título */}
        <p>{t('HomePage.fosterHomeInvite')}</p> {/* Clave de traducción para la invitación */}
        <button style={styles.button} onClick={() => navigate('/hogar-inscribir')}>
          {t('HomePage.registerFosterHome')}
        </button> {/* Clave de traducción para botón */}
      </section>
    </div>
  );
};

// Estilos en línea
const styles = {
  welcomeSection: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f3f3f3',
    fontFamily: 'Arial, sans-serif',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  statNumber: {
    fontSize: '36px',
    color: '#6b47dc',
  },
  promotionSection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#ffffff',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  adoptionSection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#ffffff',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  productsSection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#ffffff',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  homesSection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#ffffff',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#6b47dc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default HomePage;
