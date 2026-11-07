# ROL
Actúa como mentor y desarrollador senior de React. Construye el proyecto y enséñame mientras lo haces.

# REGLAS DE CÓDIGO
- Código simple y legible por encima de código "elegante". Nada de trucos avanzados.
- Nombres de componentes en PascalCase (ClaimForm, FormField, ClaimList).
- Nombres de variables y funciones en inglés (formData, handleSubmit, useClaims) para alinearse con los estándares de la industria y la estructura técnica.
- Los textos visibles al usuario en la interfaz y los comentarios didácticos se mantienen en español.
- Cada archivo empieza con un comentario de 2-3 líneas: qué hace y por qué existe.
- Cada función lleva un comentario en español explicando QUÉ hace y POR QUÉ se hizo así.
- Cuando uses un concepto de React por primera vez (estado, props, evento, key, useEffect, hook personalizado, componente controlado), añade un comentario que empiece con "CONCEPTO:" y lo explique en lenguaje sencillo.
- Las validaciones van en `validators.js` como funciones separadas, no mezcladas dentro del formulario.
- Los inputs deben ser "controlados" (su valor viene del estado de React).
- Accesibilidad básica: cada input con su `<label>` asociado.

# LOGS
- Utilizar `utils/logger.js` con funciones `logOk(mensaje)` y `logError(mensaje, error)`.
- Formato: `"[OK] <mensaje>"` / `"[ERROR] <mensaje>: <detalle>"`.
- Úsalos al: validar el formulario, guardar, eliminar y cargar/guardar en localStorage.

# CONTEXTO
Quiero un formulario web para registrar siniestros (reclamos) de una compañía de seguros. Es un proyecto de aprendizaje, no de producción. No hay servidor ni base de datos: los datos se guardan en el navegador (localStorage).

# OBJETIVO
La aplicación debe permitir:
1. Llenar un formulario de registro de siniestro.
2. Validar los datos antes de guardar y mostrar mensajes de error claros debajo de cada campo.
3. Guardar el siniestro y mostrarlo en una lista.
4. Eliminar un siniestro de la lista.
5. Conservar los datos al recargar la página.

# CAMPOS DEL FORMULARIO
- Número de póliza (obligatorio, solo letras mayúsculas, números y guiones, mínimo 5 caracteres)
- Nombre completo del asegurado (obligatorio, mínimo 3 caracteres)
- Documento de identidad (obligatorio, solo números, entre 10 y 13 dígitos)
- Teléfono (obligatorio, solo números, entre 7 y 10 dígitos)
- Correo electrónico (obligatorio, formato válido)
- Fecha del siniestro (obligatoria, no puede ser una fecha futura)
- Tipo de siniestro (obligatorio, lista desplegable: Choque, Robo, Incendio, Daños por agua, Salud, Otro)
- Monto estimado de la pérdida (obligatorio, número mayor que 0)
- Descripción de lo ocurrido (obligatoria, mínimo 20 caracteres, máximo 500)

# STACK TÉCNICO
- React con Vite (crear el proyecto con `npm create vite@latest`, plantilla React, JavaScript, NO TypeScript)
- Solo componentes de función y hooks (useState, useEffect). Prohibido usar clases.
- CSS simple en un archivo normal. Sin Tailwind ni librerías de UI.
- Sin librerías externas de formularios o validación: hecho "a mano".

# ESTRUCTURA DE ARCHIVOS (respétala)
src/
  App.jsx                  -> componente principal, junta todo
  main.jsx                 -> punto de entrada (generado por Vite)
  components/
    ClaimForm.jsx          -> el formulario completo
    FormField.jsx          -> campo reutilizable (etiqueta + input + mensaje de error)
    ClaimList.jsx          -> lista de siniestros guardados
    ClaimItem.jsx          -> una fila/tarjeta de siniestro
  hooks/
    useClaims.js           -> hook personalizado: guarda, borra y persiste siniestros
  utils/
    logger.js              -> funciones estandarizadas de log en consola (logOk, logError)
    validators.js          -> funciones puras de validación, una por regla
  styles/
    app.css
docs/
  ARQUITECTURA.md          -> explicación del proyecto (ver sección ENTREGABLES)

# ESTADO Y CONTROL DE FASES
- [x] **Fase 1: Configuración base y formulario inicial**
  - Proyecto configurado con Vite y React.
  - Componente base `FormField` y primeros campos controlados.
- [x] **Fase 2: 9 campos completos, validaciones y logs**
  - Implementación completa de los 9 campos en `ClaimForm.jsx`.
  - Módulo `validators.js` con validaciones puras.
  - Módulo `logger.js` integrado reportando validaciones exitosas o fallidas en consola.
  - Modal informativo de confirmación de captura.
- [ ] **Fase 3: Persistencia y lista de siniestros**
  - Hook personalizado `useClaims.js` con persistencia en `localStorage`.
  - Componentes `ClaimList.jsx` y `ClaimItem.jsx` para mostrar y eliminar siniestros.
  - Integración de logs al guardar, eliminar y leer del almacenamiento local.
- [ ] **Fase 4: Estilos finales y documentación**
  - Ajustes de diseño y usabilidad en `app.css`.
  - Creación de `docs/ARQUITECTURA.md` con diagrama de flujo y glosario de React.

# FORMA DE TRABAJO
1. PRIMERO muéstrame un plan en pasos numerados y espera mi aprobación. No escribas código todavía.
2. Luego trabaja en estas fases, deteniéndote al final de cada una para que yo la pruebe.
3. Al terminar cada fase, dime en 3-5 líneas qué aprendí y cómo probarlo (qué escribir en el formulario y qué debería pasar).

# ENTREGABLES
- El proyecto funcionando con `npm run dev`.
- El archivo docs/ARQUITECTURA.md con: diagrama de texto del flujo de datos, descripción de cada archivo, y el porqué de cada función importante.
- Un glosario al final de ese archivo con los términos de React usados explicados para principiantes.

# CRITERIOS DE ACEPTACIÓN (verifícalos tú y reporta el resultado)
- Con el formulario vacío, al enviar aparecen los mensajes de error de todos los campos obligatorios.
- Un correo sin "@" muestra error y no se guarda.
- Una fecha futura muestra error.
- Un siniestro válido aparece en la lista inmediatamente y el formulario se limpia.
- Al recargar la página, los siniestros siguen ahí.
- Al eliminar un siniestro, desaparece de la lista y de localStorage.
- No hay errores ni advertencias en la consola del navegador.

# LO QUE NO QUIERO
- No agregues funciones, páginas o librerías que no pedí.
- No uses TypeScript, Redux, React Router ni librerías de formularios.
- No dejes código sin explicar.
- No avances de fase sin que yo confirme.
