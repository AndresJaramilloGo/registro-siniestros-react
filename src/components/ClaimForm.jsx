
import { useState } from 'react';
import FormField from './FormField.jsx';


/**
 * CONCEPTO: Componente Controlado
 * Es cuando el valor de una casilla viene directamente de una variable de estado (value={formData.campo}).
 * React tiene el control total de lo que se ve en pantalla.
 */

/**
 * CONCEPTO: Eventos (onChange, onSubmit)
 * Son avisos de que el usuario hizo algo: escribir en una casilla (onChange) o enviar el formulario (onSubmit).
 */

/**
 * CONCEPTO: Renderizado Condicional
 * Significa mostrar u ocultar elementos en pantalla según una condición (como un "if").
 * Si la variable modalData tiene datos, React dibuja la ventana emergente; si es null, no muestra nada.
 */

function ClaimForm() {
  // Variable de estado con los datos que el usuario va escribiendo
  const [formData, setFormData] = useState({
    policyNumber: '',
    insuredName: '',
    idNumber: ''
  });

  // Guarda los datos al enviar para mostrarlos en la ventana emergente (si es null, la ventana está oculta)
  const [modalData, setModalData] = useState(null);

  // Guarda los mensajes de error de validación
  const [errors, setErrors] = useState({});

  // QUÉ HACE: Actualiza la variable del campo donde el usuario está escribiendo.
  // POR QUÉ: Con una sola función manejamos todos los campos usando el nombre de cada casilla ([name]).
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Si había un error en este campo, lo limpiamos mientras el usuario escribe
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // QUÉ HACE: Valida los campos y abre la ventana emergente solo si los datos son correctos.
  // POR QUÉ: e.preventDefault() detiene la recarga normal del navegador para no perder lo que escribimos.
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = formData.idNumber.trim();

    // Validamos que el documento tenga entre 10 y 13 caracteres
    if (id.length < 10 || id.length > 13) {
      setErrors({
        idNumber: 'El documento de identidad debe tener entre 10 y 13 caracteres.'
      });
      return; // Detiene el envío si no cumple la regla
    }

    // Si es válido, limpiamos errores y abrimos la ventana emergente
    setErrors({});
    setModalData({ ...formData });
  };

  // QUÉ HACE: Cierra la ventana emergente poniendo modalData en null.
  // POR QUÉ: Al volver a ser null, React automáticamente retira la ventana de la pantalla.
  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <form className="claim-form" onSubmit={handleSubmit} noValidate>
        <h2 className="form-title">Registrar Nuevo Siniestro</h2>
        <p className="form-subtitle">Prueba de estado y captura de eventos (3 campos)</p>

        <FormField
          id="policyNumber"
          label="Número de póliza"
          name="policyNumber"
          value={formData.policyNumber}
          onChange={handleChange}
          placeholder="Ej: SU2020IN20-EC-0"
          required
        />

        <FormField
          id="insuredName"
          label="Nombre completo del asegurado"
          name="insuredName"
          value={formData.insuredName}
          onChange={handleChange}
          placeholder="Ej: Andres Jaramillo Gómez"
          required
        />

        <FormField
          id="idNumber"
          label="Documento de identidad"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          error={errors.idNumber}
          placeholder="Ej: 0951692000"
          required
        />

        <button type="submit" className="btn-primary">
          Guardar Siniestro
        </button>
      </form>

      {/* Renderizado condicional: solo se dibuja cuando modalData no es null */}
      {modalData && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          {/* stopPropagation evita que hacer clic dentro del cuadro blanco cierre la ventana por error */}
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">¡Siniestro Registrado con Éxito!</h3>
            <p className="modal-subtitle">Se capturaron los siguientes datos:</p>

            <ul className="modal-data-list">
              <li><strong>Póliza:</strong> {modalData.policyNumber || '(Vacío)'}</li>
              <li><strong>Asegurado:</strong> {modalData.insuredName || '(Vacío)'}</li>
              <li><strong>Documento:</strong> {modalData.idNumber || '(Vacío)'}</li>
            </ul>

            <button type="button" className="btn-primary" onClick={handleCloseModal}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ClaimForm;
