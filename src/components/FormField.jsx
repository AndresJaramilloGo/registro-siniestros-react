/**
 * Componente reutilizable FormField.
 * Encapsula la etiqueta (<label>), el control de entrada (<input>, <select> o <textarea>) y el mensaje de error.
 * Existe para evitar duplicar código visual y garantizar accesibilidad consistente en todo el formulario.
 */

/**
 * CONCEPTO: Props (Propiedades)
 * Las props son los parámetros o argumentos que recibe un componente de React.
 * Permiten pasar información desde un componente padre (ej. ClaimForm) hacia un componente hijo (ej. FormField)
 * para que este último sea dinámico, configurable y reutilizable.
 */

function FormField({
  id,
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error = '',
  as = 'input',
  children,
  required = false
}) {
  /**
   * Renderiza el control HTML adecuado según la propiedad "as".
   * QUÉ HACE: Devuelve una etiqueta <input>, <select> o <textarea> configurada con sus propiedades comunes.
   * POR QUÉ SE HIZO ASÍ: Centralizamos en una sola función interna la lógica de renderizado para evitar repetir
   * las clases de estilo, el enlace de eventos y los atributos de accesibilidad en múltiples lugares.
   */
  const renderControl = () => {
    const commonProps = {
      id,
      name,
      value,
      onChange,
      placeholder,
      className: error ? 'form-control input-error' : 'form-control'
    };

    if (as === 'textarea') {
      return <textarea {...commonProps} rows="4" />;
    }

    if (as === 'select') {
      return (
        <select {...commonProps}>
          {children}
        </select>
      );
    }

    return <input type={type} {...commonProps} />;
  };

  return (
    <div className="form-field">
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="required-mark" aria-hidden="true"> *</span>}
      </label>
      {renderControl()}
      {error && <span className="error-message" role="alert">{error}</span>}
    </div>
  );
}

export default FormField;

