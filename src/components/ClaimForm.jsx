/**
 * Componente ClaimForm.
 * Muestra el formulario para registrar un siniestro con sus 9 campos y gestiona su validación.
 * Existe para capturar la información completa del asegurado y validar que cumpla todas las reglas.
 */

import { useState } from 'react';
import FormField from './FormField.jsx';
import { validateClaimForm } from '../utils/validators.js';

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

// Valores iniciales de los 9 campos del formulario
const initialFormData = {
  policyNumber: '',
  insuredName: '',
  idNumber: '',
  phone: '',
  email: '',
  claimDate: '',
  claimType: '',
  estimatedAmount: '',
  description: ''
};

function ClaimForm() {
  // Variable de estado con los datos que el usuario va escribiendo
  const [formData, setFormData] = useState(initialFormData);

  // Guarda los datos al enviar para mostrarlos en la ventana emergente (si es null, la ventana está oculta)
  const [modalData, setModalData] = useState(null);

  // Guarda los mensajes de error de cada campo
  const [errors, setErrors] = useState({});

  // QUÉ HACE: Actualiza la variable del campo donde el usuario está escribiendo.
  // POR QUÉ: Con una sola función manejamos los 9 campos usando el atributo name de cada casilla ([name]).
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Si había un mensaje de error en este campo, lo borramos en cuanto el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // QUÉ HACE: Valida los 9 campos y abre la ventana emergente solo si no hay ningún error.
  // POR QUÉ: e.preventDefault() detiene la recarga del navegador y validateClaimForm centraliza las reglas.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ejecutamos las validaciones de todos los campos
    const validationErrors = validateClaimForm(formData);

    // Si el objeto de errores tiene al menos una propiedad, significa que algo falló
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Detenemos el envío
    }

    // Si todo está correcto, limpiamos errores y mostramos la ventana emergente
    setErrors({});
    setModalData({ ...formData });
  };

  // QUÉ HACE: Cierra la ventana emergente poniendo modalData en null.
  // POR QUÉ: Al volver a ser null, React retira la ventana emergente de la vista.
  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <form className="claim-form" onSubmit={handleSubmit} noValidate>
        <h2 className="form-title">Registrar Nuevo Siniestro</h2>
        <p className="form-subtitle">Completa los 9 campos requeridos para el reporte</p>

        <div className="form-grid">
          {/* 1. Número de póliza */}
          <FormField
            id="policyNumber"
            label="Número de póliza"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
            error={errors.policyNumber}
            placeholder="Ej: SU2020IN20-EC-0"
            required
          />

          {/* 2. Nombre del asegurado */}
          <FormField
            id="insuredName"
            label="Nombre completo del asegurado"
            name="insuredName"
            value={formData.insuredName}
            onChange={handleChange}
            error={errors.insuredName}
            placeholder="Ej: Andres Jaramillo Gómez"
            required
          />

          {/* 3. Documento de identidad */}
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

          {/* 4. Teléfono */}
          <FormField
            id="phone"
            label="Teléfono de contacto"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="Ej: 0987654321"
            required
          />

          {/* 5. Correo electrónico */}
          <FormField
            id="email"
            label="Correo electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Ej: andres@correo.com"
            required
          />

          {/* 6. Fecha del siniestro */}
          <FormField
            id="claimDate"
            label="Fecha del siniestro"
            name="claimDate"
            type="date"
            value={formData.claimDate}
            onChange={handleChange}
            error={errors.claimDate}
            required
          />

          {/* 7. Tipo de siniestro (select) */}
          <FormField
            id="claimType"
            label="Tipo de siniestro"
            name="claimType"
            as="select"
            value={formData.claimType}
            onChange={handleChange}
            error={errors.claimType}
            required
          >
            <option value="">-- Selecciona una opción --</option>
            <option value="Choque">Choque</option>
            <option value="Robo">Robo</option>
            <option value="Incendio">Incendio</option>
            <option value="Daños por agua">Daños por agua</option>
            <option value="Salud">Salud</option>
            <option value="Otro">Otro</option>
          </FormField>

          {/* 8. Monto estimado */}
          <FormField
            id="estimatedAmount"
            label="Monto estimado de la pérdida ($)"
            name="estimatedAmount"
            type="number"
            step="0.01"
            min="0"
            value={formData.estimatedAmount}
            onChange={handleChange}
            error={errors.estimatedAmount}
            placeholder="Ej: 1500.00"
            required
          />

          {/* 9. Descripción (textarea que ocupa todo el ancho) */}
          <div className="form-grid-full">
            <FormField
              id="description"
              label="Descripción de lo ocurrido"
              name="description"
              as="textarea"
              value={formData.description}
              onChange={handleChange}
              error={errors.description}
              placeholder="Describe detalladamente los hechos (mínimo 20 caracteres, máximo 500)..."
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Guardar Siniestro
        </button>
      </form>

      {/* Renderizado condicional: ventana emergente con los 9 datos ingresados */}
      {modalData && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">¡Siniestro Registrado con Éxito!</h3>
            <p className="modal-subtitle">Resumen de los datos validados:</p>

            <ul className="modal-data-list">
              <li><strong>Póliza:</strong> {modalData.policyNumber}</li>
              <li><strong>Asegurado:</strong> {modalData.insuredName}</li>
              <li><strong>Documento:</strong> {modalData.idNumber}</li>
              <li><strong>Teléfono:</strong> {modalData.phone}</li>
              <li><strong>Correo:</strong> {modalData.email}</li>
              <li><strong>Fecha:</strong> {modalData.claimDate}</li>
              <li><strong>Tipo:</strong> {modalData.claimType}</li>
              <li><strong>Monto Estimado:</strong> ${Number(modalData.estimatedAmount).toLocaleString('es-EC', { minimumFractionDigits: 2 })}</li>
              <li><strong>Descripción:</strong> {modalData.description}</li>
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
