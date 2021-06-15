# Introducción
* Entre los desafios más grandes que surgen al desarrollar una aplicacion web está la calidad de la entrega del producto y que el desarrollo del mismo no contenga errores, además de cumplir con lor requerimientos del cliente.
* Para optimizar la tarea de QA, y mejorar tiempos de entregas y revisión, la automatización de pruebas aporta grandes beneficios en cualquier desarrollo. 
* La automatizacion de tests va de la mano del testing manual, primero conocer la aplicación y luego automatizar estas pruebas con el framework elegido para la automatización. De esta forma encontraremos errores en las primeras fases de desarrollo, reduciendo asi los costes y las horas de trabajo.

* **Tests E2E:** Simulan el comportamiento de un usuario real. Prueban toda la aplicacion de principiio a fin, cubriendo asi secciones que las pruebas unitarias y las pruebas de integracion no cubren.

**Objetivos:** 
* Aumentar la productividad.
* Automatizar tareas repetitivas para poder acortar los tiempos de ejecucion y reducir errores.
* Reducir costos.
* Resultados siempre actualizados.
* Mejorar el control de las operaciones.
* Mejorar la comunicacion.

**¿Qué es Cypress.io?**

* Cypress.io es una herramienta de testeo de front-end de código abierto construida para la web moderna. Este framework “todo en uno” incluye librerías de aserciones, mocks y pruebas end-to-end automáticas sin utilizar Selenium.
* Al contrario que Selenium, Cypress cuenta con una nueva arquitectura construida desde cero, que ejecuta los comandos en el mismo ciclo de ejecución.
* No necesitamos instalar varias herramientas ni librerías separadas para poder ejecutar tests, ya que ejecutando únicamente una línea de comando tendríamos Cypress instalado.

**¿Qué es Cucumber?**
* Cucumber es una herramienta para implementar metodologías como el Behaviour Driven Development (BDD) o desarrollo basado en comportamiento, que permite ejecutar descripciones funcionales en texto plano como pruebas de software automatizadas.
* Estas descripciones funcionales se escriben en un lenguaje específico de dominio, legible por el área de negocio, denominado Gherkin, que soporta más de 60 idiomas. Gherkin sirve simultáneamente como documentación de apoyo al desarrollo y a las pruebas automatizadas.

**¿Qué es el patron de diseño Page Object Model?**
* Es un patrón de diseño que se utiliza en pruebas automatizadas para evitar código duplicado y mejorar el mantenimiento de las mismas.
* La idea es modelar las páginas y sus comportamientos para lograr pruebas claras de escribir, entender y mantener.

Al ejecutarlo por primera vez, se creará la carpeta Cypress, que contendrá al siguiente estructura de carpetas:

* **Fixtures:** Datos estáticos que pueden ser utilizados para los tests.
* **Integration:** Lugar donde colocaremos los tests. Por defecto contiene una carpeta de tests de ejemplo.
* **Plugins:** Permiten acceder, modificar o ampliar el comportamiento interno de Cypress.
* **Support:** Lugar para colocar comportamientos reutilizables, como comandos personalizados o anulaciones globales, que estarán disponibles para todos los tests.

# Comenzamos con la creación del framework desde cero
El único requisito para instalar Cypress.io es tener instalado Node js en nuestro equipo y usaremos como herramienta de trabajo Visual Studio Code.
1.	Abrimos el CMD y comprobamos que tenemos instalado node js con el comando "npm -v".
2.  Creamos una carpeta con el nombre que describa el proyecto o el requerimiento a probar, nos dirigimos a la terminal y entramos a la carpeta creada "cd: path de la carpeta".
3.  Primer comando a correr sera "npm init", luego nos pedirá datos a ingresar (nombre del paquete,version,descripcion,test comand,keywords,ahutor,license) con esto lograremos nuestro primer archivo un package.json el cual contendrá toda la informacion de nuestro proyecto.
4.  Instalamos Cypress como dependencia de nuestro proyecto con el comando "npm install cypress --save-dev" el cual creará un folder llamado node_modules donde estará todo lo que necesitamos para que funcione Cypress.
5.  Abriremos Visual Studio Code donde presionaremos "New folder" y elegimos nuestro proyecto, luego nos vamos a dirigir a nuestro archivo "package.json" donde crearemos un script recomedable por cyprees "script":{ "cypress:open" : "cypress open"}.
6.  Vamos a correr el comando "npm run cypress open" el cual nos abrirá una ventana donde podremos ver todos nuestros tests.

* Una vez creado nuestro proyecto Cypress vamos a ir es búsqueda de la implementacion de Cucumber.

1. Abrimos el CMD y nos dirigmos a la carpeta de nuestro proyecto y en el mismo vamos a ejecutar el siguiente comando "npm install --save-dev cypress-cucumber-preprocessor"
2. En Visual Studio Code vamos a configurar nuestro proyecto, en el archivo index.js que se encuentra en la carpeta plugins vamos a crear una constante "const cucumber = require('cypress-cucumber-preprocessor').default
3. Seguimos en el archivo index.js donde vamos a ver un método "module.exports = (on.config) => {} donde dentro de este colocaremos "on('file:preprocessor',cucumber())
4. Siguiente paso nos dirigimos a nuestro archivo cypress.json en el cual colocaremos "testFiles" : "**/*.feature"
5. Siguiente paso nos dirigimos a nuestro package.json y agregaremos "cypress-cucumber.preprocessor" :{ "nonGlobalStepDefinitions":true}
6. Último paso, agregar plugins, principalmente "cucumber gherkin full support" a nuestro Visual Studio Code.

# ¿Como hacer para poder usar este proyecto?
1. Primer paso clonar el proyecto con el comando git clone "url del proyecto".
2. Realizamos el comando npm install.
3. Verificar que nuestro Visual Studio Code tenga el plugin "cucumber gherkin full support"