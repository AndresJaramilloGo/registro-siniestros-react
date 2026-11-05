/**
 * Archivo de arranque del proyecto.
 * Conecta React con la página web (index.html) para que la aplicación se pueda ver en pantalla.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import App from './App.jsx';

// QUÉ HACE: Coloca toda nuestra aplicación (<App />) dentro del contenedor vacío con id "root".
// POR QUÉ: StrictMode es una ayuda de React que nos avisa en la consola si cometemos errores comunes.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
