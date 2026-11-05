  /**
 * Componente principal App.
 * Es la pantalla principal que reúne todos los elementos de nuestra aplicación.
 */

import ClaimForm from './components/ClaimForm.jsx';

/**
 * CONCEPTO: JSX
 * Es una forma de escribir código visual parecido a HTML dentro de JavaScript.
 * Nos permite armar la pantalla de forma fácil y directa.
 */

/**
 * CONCEPTO: Componente
 * Es una función que devuelve lo que queremos mostrar en pantalla (JSX).
 * Siempre empieza con mayúscula (ej: App) para distinguirlo de una etiqueta normal de HTML.
 */

function App() {
  // QUÉ HACE: Muestra el título del sistema y el formulario de siniestros.
  // POR QUÉ: Separar la pantalla en partes pequeñas hace el código más ordenado y fácil de mantener.
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
