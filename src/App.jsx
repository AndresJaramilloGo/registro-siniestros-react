/**
 * Componente principal App.
 * Actúa como contenedor raíz de la aplicación de Registro de Siniestros.
 * Existe para ensamblar la interfaz de usuario y coordinar la vista del formulario y la lista.
 */

import ClaimForm from './components/ClaimForm.jsx';

/**
 * CONCEPTO: JSX (JavaScript XML)
 * Es una extensión de sintaxis para JavaScript que permite escribir estructuras
 * parecidas a HTML directamente dentro del código JS. React lo transforma internamente
 * en objetos JavaScript estándar para construir el DOM virtual.
 */

/**
 * CONCEPTO: Componente Funcional
 * En el React contemporáneo, un componente es una función regular de JavaScript
 * que retorna elementos en formato JSX. El nombre de la función SIEMPRE debe iniciar
 * con letra mayúscula (ej. App, ClaimForm) para que React lo distinga de una etiqueta HTML nativa.
 */

function App() {
  /**
   * Renderiza la vista principal del proyecto.
   * QUÉ HACE: Retorna el encabezado institucional y el formulario de captura.
   * POR QUÉ SE HIZO ASÍ: Mantener App como un contenedor limpio permite que cada parte de la pantalla
   * esté modularizada en componentes independientes y fáciles de mantener.
   */
  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">Aseguradora Nacional</h1>
        <p className="app-description">Portal de Registro y Control de Siniestros</p>
      </header>

      <ClaimForm />
    </main>
  );
}

export default App;
