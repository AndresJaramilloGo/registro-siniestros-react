/**
 * Componente principal App.
 * Es la pantalla principal que reune la barra lateral institucional (Sidebar) y el contenido del formulario.
 * Existe como contenedor principal para estructurar la navegacion y el area de trabajo.
 */

import Sidebar from './components/Sidebar.jsx';
import ClaimForm from './components/ClaimForm.jsx';

/**
 * CONCEPTO: Componente
 * Es una funcion que devuelve lo que queremos mostrar en pantalla (JSX).
 * Siempre empieza con mayuscula (ej: App) para distinguirlo de una etiqueta normal de HTML.
 */

function App() {
  // QUE HACE: Estructura la pantalla en un layout general: barra lateral (Sidebar) y area de trabajo.
  // POR QUE: Permite navegar por las secciones de la aseguradora manteniendo visible el menu de acceso.
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-main-content">
        <div className="app-content-wrapper">
          <header className="app-header">
            <img
              src="/LOGO%20ECUA%20RE.jpg"
              alt="Logo Reaseguradora del Ecuador EcuaRE"
              className="app-logo"
            />
            <h1 className="app-title">Reaseguradora del Ecuador</h1>
            <p className="app-description">Portal de Registro y Control de Siniestros</p>
          </header>

          <ClaimForm />
        </div>
      </main>
    </div>
  );
}

export default App;
