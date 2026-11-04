/**
 * Componente ClaimForm.
 * Gestiona el formulario para capturar los datos de un nuevo siniestro de seguro.
 * Existe para centralizar el estado de los campos, la interacción del usuario y el envío del formulario.
 */

import { useState } from 'react';
import FormField from './FormField.jsx';

/**
 * CONCEPTO: Estado (useState)
 * El estado es la memoria interna de un componente en React. Permite guardar datos
 * que pueden cambiar con el tiempo (por ejemplo, el texto que escribe un usuario).
 * Cuando el estado cambia mediante su función actualizadora (setFormData), React
 * vuelve a ejecutar el componente (re-renderizado) para mostrar la interfaz actualizada.
 */

/**
 * CONCEPTO: Componente Controlado
 * En React tradicional, un input se considera "controlado" cuando su valor visible en pantalla
 * está completamente determinado por el estado de React (value={formData.campo}). Cualquier
 * pulsación de tecla no altera el input directamente, sino que dispara un evento que actualiza
 * el estado, y este a su vez actualiza el input.
 */

/**
 * CONCEPTO: Manejo de Eventos en React
 * React envuelve los eventos nativos del navegador en "Eventos Sintéticos" (como onChange y onSubmit).
 * Esto garantiza que los eventos funcionen exactamente igual en cualquier navegador web.
 */

function ClaimForm() {
  // Estado local para los campos del formulario (en Fase 1 iniciamos con los 3 primeros)
  const [formData, setFormData] = useState({
    policyNumber: '',
    insuredName: '',
    idNumber: ''
  });

  /**
   * Actualiza el estado cuando el usuario escribe en cualquiera de los campos.
   * QUÉ HACE: Extrae el nombre (name) y el nuevo valor (value) del campo que disparó el cambio y actualiza el objeto formData.
   * POR QUÉ SE HIZO ASÍ: Usamos una única función reutilizable aprovechando la sintaxis de corchetes [name] de JavaScript
   * y el operador de propagación (...prevData), lo que evita tener que escribir una función onChange para cada campo.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  /**
   * Procesa el envío del formulario al hacer clic en el botón o pulsar Enter.
   * QUÉ HACE: Cancela el comportamiento por defecto del navegador con e.preventDefault() y procesa los datos ingresados.
   * POR QUÉ SE HIZO ASÍ: En aplicaciones de una sola página (SPA), si no cancelamos el envío predeterminado, el navegador
   * recargaría toda la página web y perderíamos el estado en memoria de React.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos capturados en Fase 1:', formData);
    alert(
      `¡Datos recibidos correctamente (Fase 1)!\n\n` +
      `Número de Póliza: ${formData.policyNumber}\n` +
      `Asegurado: ${formData.insuredName}\n` +
      `Documento: ${formData.idNumber}`
    );
  };

  return (
    <form className="claim-form" onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">Registrar Nuevo Siniestro</h2>
      <p className="form-subtitle">Fase 1: Prueba de estado y captura de eventos (3 campos)</p>

      <FormField
        id="policyNumber"
        label="Número de póliza"
        name="policyNumber"
        value={formData.policyNumber}
        onChange={handleChange}
        placeholder="Ej: POL-98765"
        required
      />

      <FormField
        id="insuredName"
        label="Nombre completo del asegurado"
        name="insuredName"
        value={formData.insuredName}
        onChange={handleChange}
        placeholder="Ej: María Rodríguez Gómez"
        required
      />

      <FormField
        id="idNumber"
        label="Documento de identidad"
        name="idNumber"
        value={formData.idNumber}
        onChange={handleChange}
        placeholder="Ej: 1020304050"
        required
      />

      <button type="submit" className="btn-primary">
        Guardar Siniestro (Fase 1)
      </button>
    </form>
  );
}

export default ClaimForm;

