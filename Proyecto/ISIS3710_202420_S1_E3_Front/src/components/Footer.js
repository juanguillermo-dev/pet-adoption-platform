import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importar el hook para internacionalización

const Footer = () => {
  const { t } = useTranslation();  // Hook de traducción

  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/icons/facebook.png" alt="Facebook" style={styles.icon} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="/icons/instagram.png" alt="Instagram" style={styles.icon} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <img src="/icons/youtube.png" alt="YouTube" style={styles.icon} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <img src="/icons/linkedin.png" alt="LinkedIn" style={styles.icon} />
        </a>
      </div>

      <div style={styles.sections}>
        <div style={styles.section}>
          <h3 style={styles.heading}>{t('Footer.adoption')}</h3>
          <ul style={styles.list}>
            <li><Link to="/adopcion/perros" style={styles.link}>{t('Footer.dogs')}</Link></li>
            <li><Link to="/adopcion/gatos" style={styles.link}>{t('Footer.cats')}</Link></li>
            <li><Link to="/adopcion/otros" style={styles.link}>{t('Footer.otherAnimals')}</Link></li>
            <li><Link to="/adopcion/familiares" style={styles.link}>{t('Footer.families')}</Link></li>
            <li><Link to="/adopcion/cuidados" style={styles.link}>{t('Footer.care')}</Link></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>{t('Footer.products')}</h3>
          <ul style={styles.list}>
            <li><Link to="/productos/alimento" style={styles.link}>{t('Footer.food')}</Link></li>
            <li><Link to="/productos/juguetes" style={styles.link}>{t('Footer.toys')}</Link></li>
            <li><Link to="/productos/camas" style={styles.link}>{t('Footer.beds')}</Link></li>
            <li><Link to="/productos/accesorios" style={styles.link}>{t('Footer.accessories')}</Link></li>
            <li><Link to="/productos/medicina" style={styles.link}>{t('Footer.medicine')}</Link></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>{t('Footer.howToHelp')}</h3>
          <ul style={styles.list}>
            <li><Link to="/fundaciones" style={styles.link}>{t('Footer.foundations')}</Link></li>
            <li><Link to="/hogar-inscribir" style={styles.link}>{t('Footer.fosterRegister')}</Link></li>
            <li><Link to="/peticiones-hogar" style={styles.link}>{t('Footer.fosterRequests')}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#5e5768',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 50px',
    fontSize: '14px',
    marginTop: 'auto',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  sections: {
    display: 'flex',
    justifyContent: 'center', // Centra las secciones
    width: '100%',
    gap: '80px', // Añade un espacio entre las secciones
  },
  section: {
    textAlign: 'left', // Alinea el contenido de cada sección a la izquierda
  },
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    marginBottom: '8px',
    display: 'block',
  },
};

export default Footer;