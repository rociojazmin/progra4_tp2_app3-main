# App 3 - Interprete de JavaScript online

Estoy aprendiendo JavaScript porque me contaron que es un lenguaje muy seguro. Amo el `null` y ahora encima tengo `undefined`!

Pero abrir la consola de Chrome o usar `node` para ejecutar mi código es molesto. Quiero una aplicación web que lo haga mas fácilmente.

Me gustaría que me deje meter todo el código que yo quiera y al apretar un botón, lo ejecute.

> Para cuando hagan el frontend: pueden usar un gran cuadro de texto para el código, pero a la larga es molesto incluso para ustedes a la hora de testear.
>
> Así que también podrían tener su propio Visual Studio Code metido dentro de su aplicación web usando el Mónaco Editor: <https://github.com/microsoft/monaco-editor>

Las aplicaciones que voy a escribir ahí son de consola. Así que toda forma de mostrarle algo al mundo va a ser mostrando texto en consola. Claramente, necesito ver ese texto. Pero no en la consola de Chrome, es molesto. En cambio, quiero que todo lo que mi código escribe se muestre ahi mismo, en la web de la aplicación.

## Optativa 1

Necesito que todo código que ejecuto se guarde en algún lado, de alguna manera. Así puedo fácilmente volver a abrir un código antiguo para  editarlo y volver a ejecutarlo.

## Optativa 2

Necesito que la aplicación haga de tester automatizado de mi código. Para ello, espero poder decirle a la app cual es la función que quiero testear. La función debería esperar un parámetro, ni mas ni menos. La app va a ejecutar esa función y le va a pasar miles de valores al azar como parámetro. Si para alguna de las pruebas arroja error, me lo debería informar de alguna manera.

> No hace falta que hagan todas las optativas, pero tienen que elegir al menos una.
