/**
 * Modulo de registro de eventos (Logger).
 * Proporciona funciones estandarizadas para mostrar mensajes de exito y error en la consola.
 * Existe para centralizar el formato de los logs y facilitar la depuracion del sistema sin duplicar llamadas dispersas.
 */

// QUE HACE: Imprime en consola un mensaje de exito precedido por el prefijo [OK].
// POR QUE: Permite confirmar visualmente en la consola que una operacion termino de forma correcta.
export function logOk(mensaje) {
  console.log(`[OK] ${mensaje}`);
}

// QUE HACE: Imprime en consola un mensaje de error precedido por [ERROR], agregando el detalle si existe.
// POR QUE: Estandariza la visualizacion de fallas facilitando identificar de inmediato la causa del problema.
export function logError(mensaje, error) {
  const detalle = error !== undefined && error !== null
    ? (typeof error === 'object' ? JSON.stringify(error) : error)
    : '';
  const textoCompleto = detalle ? `[ERROR] ${mensaje}: ${detalle}` : `[ERROR] ${mensaje}`;
  console.error(textoCompleto);
}
