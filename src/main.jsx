/**
 * Punto de entrada principal de la aplicación.
 * Monta el árbol de componentes de React dentro del contenedor <div id="root"> del archivo index.html.
 * Existe como el puente de inicio entre el navegador web y la librería React.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import App from './App.jsx';

/**
 * Inicializa y renderiza el árbol de React en el DOM.
 * QUÉ HACE: Selecciona el nodo HTML con id "root" e inyecta el componente <App /> dentro del modo estricto (StrictMode).
 * POR QUÉ SE HIZO ASÍ: StrictMode nos ayuda durante el desarrollo advirtiendo en la consola sobre posibles malas prácticas
 * o efectos secundarios no deseados sin afectar el código en producción.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
