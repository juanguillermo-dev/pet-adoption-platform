import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Si lo necesitas
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'; // Importa el archivo i18n.js para la configuración de internacionalización

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envía a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();