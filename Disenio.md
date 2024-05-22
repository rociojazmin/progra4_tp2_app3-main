# Documentación

## Consigna

Estoy aprendiendo JavaScript porque me contaron que es un lenguaje muy seguro. Amo el null y ahora encima tengo undefined!

Pero abrir la consola de Chrome o usar node para ejecutar mi código es molesto. Quiero una aplicación web que lo haga mas fácilmente.

Me gustaría que me deje meter todo el código que yo quiera y al apretar un botón, lo ejecute.

Para cuando hagan el frontend: pueden usar un gran cuadro de texto para el código, pero a la larga es molesto incluso para ustedes a la hora de testear.

Así que también podrían tener su propio Visual Studio Code metido dentro de su aplicación web usando el Mónaco Editor: <https://github.com/microsoft/monaco-editor>

Las aplicaciones que voy a escribir ahí son de consola. Así que toda forma de mostrarle algo al mundo va a ser mostrando texto en consola. Claramente, necesito ver ese texto. Pero no en la consola de Chrome, es molesto. En cambio, quiero que todo lo que mi código escribe se muestre ahí mismo, en la web de la aplicación.

Necesito que todo código que ejecuto se guarde en algún lado, de alguna manera. Así puedo fácilmente volver a abrir un código antiguo para editarlo y volver a ejecutarlo.

## Explicación del problema

- El cliente quiere una aplicación que le deje escribir código Javascript, ejecutarlo con un botón y que el resultado salga en la misma aplicación.
- Además quiere que cada vez que ejecute su código éste se guarde y pueda volver a él después de haber seguido codeando. O sea que pueda volver a cualquiera de las distintas versiones que se vayan guardando y seguir trabajando con ellas.

## Investigación

### ¿Qué es un editor de código?

Un editor de código es una herramienta de software diseñada para facilitar la escritura y edición de código fuente de programas. Por ejemplo: Visual Studio Code, Sublime Text y Atom.

### ¿Qué es Mónaco Editor? ¿Cómo funciona? ¿Para qué nos sirve en nuestro proyecto?

Monaco Editor es una librería que te permite colocar un editor de código en tu aplicación web. Funciona perfecto con React y NextJs.

Decidimos utilizar mónaco editor, ya que, esta página lo cataloga como el mejor entre la competencia: (<https://npmtrends.com/ace-code-editor-vs-codeflask-vs-codejar-vs-codemirror-vs-monaco-editor>)

Codejar también nos parece una buena opción, nos definimos por Monaco Editor porque había más documentación.

Este documento explica el paso a paso para usar Monaco Editor: [Tutorial Monaco Editor]

### ¿Cómo se ejecuta código JavaScript?¿Qué es la función eval()?

En este tutorial se menciona que _para poder ejecutar el código que escribe el usuario, van a tener que usar un motor de ejecución de javascript y así obtener el resultado y poder manejarlo_. Esto se encuentra en el punto cuatro de la documentación -> `4. Ejecución`.

Una forma de ejecutar código javascript y capturar el resultado en una variable es con la función eval(), pero esta manera es poco segura ya que puede ejecutar código malicioso dentro de la aplicación, entonces encontramos esta alternativa que es una API la cual pasándole el código con un console.log() te devuelve el resultado de la ejecución del console.log(). Acá van los links a la API y a un video que explica cómo utilizarla (en el minuto exacto donde lo explica😉):
https://piston.readthedocs.io/en/latest/api-v2/#response_1
https://youtu.be/THgBePRV13o?t=1205

## Decisiones de Modelado

### Entidades

- `VersionDeCodigo`: Es la entidad que va a tener el código que escriba el usuario y la fecha en la cual se ejecutó. La fecha se utiliza para poder identificar las versiones del código.
- `VersionesDeCodigo`: Va a ser el listado de las distintas versiones del `Codigo` que vaya ejecutando el usuario.
- `EditorDeCodigo`: Va a ser el contenedor donde el usuario escriba el código. Acá van a tener las propiedades que sirvan del objeto que les devuelva Monaco Editor, así solo se quedan con los datos necesarios.
- `ResultadoDeCodigo`: es la entidad que va a contener el resultado de la ejecución del código. Ej: si el código es `console.log(2+2)`, el resultado que se va a mostrar es 4.

### Relaciones

- `VersionesDeCodigo` tiene muchas `Version`(es)`DeCodigo`

### Reglas

- Validar que la lista de versiones de código no esté vacía

### Métodos que expone el modelo

Nos pareció que `VersionDeCodigo` necesitaba acciones de:

- **Creación:** Al ejecutar el código, se genera una nueva versión.

Decidimos que `VersionesDeCodigo` necesitaba acciones de:

- **Consulta:** Acá el usuario consulta TODAS las versiones del código, necesitamos esta acción para que el usuario pueda tener una vista general de todas las versiones y así poder elegir una.

Decidimos que `EditorDeCodigo` necesitaba acciones de:

- **Creación:** Al inicio de la aplicación se debe crear un nuevo editor de código.
- **Consulta:** Acá la aplicación trae el editor de código con su código actual. Sirve para que, cuando se cierre la aplicación y se vuelva a abrir más tarde, el código esté como se dejó la última vez.
- **EjecutarCodigo:** Esta es la acción del editor de ejecutar el código que contiene en ese momento y mostrar el resultado.

### Notas

- No necesitamos la acción ConsultarCodigo ya que, cuando se consulta el listado de versiones de código, ya se están trayendo la fecha y el valor de cada uno, entonces cuando se elije uno de ellos el valor ya está disponible para ser mostrado dentro del editor y por lo tanto no hace falta consultarlo a la base de datos.
- No necesitamos la acción ModificarCodigo ya que cuando se selecciona una versión vieja del mismo y se modifica, al ejecutarlo se crea una nueva versión, no se sobreescribe la versión seleccionada.

[Tutorial Monaco Editor]: https://docs.google.com/document/d/1f-F-Xr3h_KwFhkJ9zkPb78bRysInKhrQiqzBDUR5ox8/edit?usp=sharing
