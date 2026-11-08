/**
 * Funciones puras de validación.
 * Revisa que los datos ingresados en cada campo cumplan con las reglas de negocio.
 * Existe para mantener las reglas separadas de la parte visual del formulario.
 */

// QUÉ HACE: Revisa que la póliza tenga al menos 5 caracteres y solo mayúsculas, números o guiones.
// POR QUÉ: Es el formato estándar de las pólizas de la aseguradora.
export function validatePolicyNumber(value) {
  const text = (value || '').trim();
  if (!text) {
    return 'El número de póliza es obligatorio.';
  }
  if (text.length < 5) {
    return 'El número de póliza debe tener al menos 5 caracteres.';
  }
  const regex = /^[A-Z0-9-]+$/;
  if (!regex.test(text)) {
    return 'Solo se permiten letras mayúsculas, números y guiones.';
  }
  return '';
}

// QUÉ HACE: Revisa que el nombre del asegurado tenga al menos 3 caracteres.
// POR QUÉ: Un nombre no puede estar vacío ni ser una sola letra.
export function validateInsuredName(value) {
  const text = (value || '').trim();
  if (!text) {
    return 'El nombre completo del asegurado es obligatorio.';
  }
  if (text.length < 3) {
    return 'El nombre debe tener al menos 3 caracteres.';
  }
  return '';
}

// QUÉ HACE: Revisa que el documento tenga solo números y entre 10 y 13 dígitos.
// POR QUÉ: Cumple con el formato de identificación (cédula o RUC).
export function validateIdNumber(value) {
  const text = (value || '').trim();
  if (!text) {
    return 'El documento de identidad es obligatorio.';
  }
  const regex = /^[0-9]+$/;
  if (!regex.test(text)) {
    return 'El documento solo debe contener números.';
  }
  if (text.length < 10 || text.length > 13) {
    return 'El documento debe tener entre 10 y 13 dígitos.';
  }
  return '';
}

// QUÉ HACE: Revisa que el teléfono contenga solo números y tenga entre 7 y 10 dígitos.
// POR QUÉ: Es la longitud estándar para teléfonos fijos y móviles.
export function validatePhone(value) {
  const text = (value || '').trim();
  if (!text) {
    return 'El teléfono de contacto es obligatorio.';
  }
  const regex = /^[0-9]+$/;
  if (!regex.test(text)) {
    return 'El teléfono solo debe contener números.';
  }
  if (text.length < 7 || text.length > 10) {
    return 'El teléfono debe tener entre 7 y 10 dígitos.';
  }
  return '';
}

// QUÉ HACE: Revisa que el correo tenga una estructura válida con arroba y dominio.
// POR QUÉ: Garantiza que se pueda contactar al asegurado por correo.
export function validateEmail(value) {
  const text = (value || '').trim();
  if (!text) {
    return 'El correo electrónico es obligatorio.';
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(text)) {
    return 'Ingresa un correo electrónico válido (ejemplo: usuario@correo.com).';
  }
  return '';
}

// QUÉ HACE: Revisa que la fecha haya sido seleccionada y no sea mayor a hoy.
// POR QUÉ: No se puede registrar un siniestro que todavía no ha ocurrido.
export function validateClaimDate(value) {
  if (!value) {
    return 'La fecha del siniestro es obligatoria.';
  }
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const today = `${year}-${month}-${day}`;

  if (value > today) {
    return 'La fecha del siniestro no puede ser una fecha futura.';
  }
  return '';
}

// QUÉ HACE: Revisa que el usuario haya elegido una opción de la lista desplegable.
// POR QUÉ: Cada siniestro debe estar clasificado en un tipo específico.
export function validateClaimType(value) {
  if (!value) {
    return 'Debes seleccionar el tipo de siniestro.';
  }
  return '';
}

// QUÉ HACE: Revisa que el monto sea un número válido, mayor a 0, con tope de 10 dígitos y hasta 2 decimales.
// POR QUÉ: Un siniestro debe tener una pérdida económica real, con formato estándar de moneda y sin números excesivos.
export function validateEstimatedAmount(value) {
  const text = String(value || '').trim();
  if (!text) {
    return 'El monto estimado de la pérdida es obligatorio.';
  }

  // Verifica que tenga formato numérico y no más de 2 cifras decimales para los centavos
  const decimalFormat = /^\d+(\.\d{1,2})?$/;
  if (!decimalFormat.test(text)) {
    return 'El monto solo debe contener números y hasta un máximo de 2 decimales.';
  }

  const number = Number(text);
  if (isNaN(number) || number <= 0) {
    return 'El monto estimado debe ser un número mayor a 0.';
  }

  // Límite corporativo del sistema: hasta 10 dígitos enteros ($9,999,999,999.99)
  const maxAllowedAmount = 9999999999.99;
  if (number > maxAllowedAmount) {
    return 'El monto no puede superar $9,999,999,999.99 (máximo 10 dígitos enteros).';
  }

  return '';
}

// QUÉ HACE: Revisa que la descripción tenga entre 20 y 500 caracteres.
// POR QUÉ: Asegura que el relato del siniestro tenga suficiente detalle sin ser excesivo.
export function validateDescription(value) {
  const text = (value || '').trim();
  if (!text) {
    return 'La descripción de lo ocurrido es obligatoria.';
  }
  if (text.length < 20) {
    return `La descripción es muy corta (mínimo 20 caracteres, tienes ${text.length}).`;
  }
  if (text.length > 500) {
    return 'La descripción no puede superar los 500 caracteres.';
  }
  return '';
}

// QUÉ HACE: Ejecuta todas las validaciones anteriores y devuelve un objeto con los errores encontrados.
// POR QUÉ: Permite validar todo el formulario de una sola vez al momento de enviar.
export function validateClaimForm(formData) {
  const errors = {};

  const policyError = validatePolicyNumber(formData.policyNumber);
  if (policyError) errors.policyNumber = policyError;

  const nameError = validateInsuredName(formData.insuredName);
  if (nameError) errors.insuredName = nameError;

  const idError = validateIdNumber(formData.idNumber);
  if (idError) errors.idNumber = idError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const dateError = validateClaimDate(formData.claimDate);
  if (dateError) errors.claimDate = dateError;

  const typeError = validateClaimType(formData.claimType);
  if (typeError) errors.claimType = typeError;

  const amountError = validateEstimatedAmount(formData.estimatedAmount);
  if (amountError) errors.estimatedAmount = amountError;

  const descError = validateDescription(formData.description);
  if (descError) errors.description = descError;

  return errors;
}

