**Tipo de prueba:**
* EL tipo de pruebas ejecutadas son pruebas funcionales/exploratorias para validar en comportamiento correcto de las distintas opciones de la página.

**Resultado Esperado:**
* Se espera que el comportamiento de los distintos escenarios sea el correcto, que haga las validaciones correspondientes y que tenga un tiempo de respuesta adecuado.

**Flujo de Pruebas:**
* EL flujo de pruebas realizado principalmente se basó en las funcionalidades Login y Register. PAra el caso de Register se validó un flujo óptimo, así como casos alternativos y casos bordes para validar que el sistema fuera capaz de responder correctamente ante formatos erroneos de email, por ejemplo.
* Para el Login el flujo de pruebas se basó en el flujo óptimo para ingresar a la página, y también escenarios como que el usuario no se encuentre registrado o no complete los campos requeridos para el ingreso.
* Además se probaron flujos como recuperar contraseña, navegar por los menús de la página y cerrar sesión.

**Libreria usada y explicación:**
* Se utilizó Cypress.io porque es una herramienta de testeo de front-end de código abierto e incluye librerías de aserciones, mocks y pruebas end-to-end automáticas. Además no se necesita instalar varias herramientas ni librerías separadas para poder ejecutar tests, ya que ejecutando únicamente una línea de comando tendríamos Cypress instalado.

**Plan de pruebas:**
* El plan de pruebas fue cargado a herramienta Jira. La URL de acceso: https://brimarrodriguez.atlassian.net/projects/ACQT?selectedItem=com.thed.zephyr.je__cycle-summary

* Reporte de ejecución: \cypress\reports\cucumber-report\index.html

* Videos de ejecución: \cypress\videos