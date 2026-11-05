/**
 * Componente FormField.
 * Dibuja un campo de formulario: su etiqueta (label), su casilla para escribir y su mensaje de error si algo está mal.
 * Existe para no repetir este mismo diseño en cada uno de los 9 campos.
 */

/**
 * CONCEPTO: Props
 * Son datos o funciones que le pasamos a un componente desde afuera (como los argumentos de una función común).
 * Sirven para que el mismo componente pueda mostrar textos o valores distintos.
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
  // QUÉ HACE: Decide si muestra una casilla común (<input>), una lista desplegable (<select>) o un cuadro largo (<textarea>).
  // POR QUÉ: Así un solo componente sirve para cualquier tipo de campo del formulario sin duplicar código.
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
