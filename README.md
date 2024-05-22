# TP2 de Programación Multimedial 4

## Metodología

Integrantes por equipo: 2
Se aprueba con: 6

### Objetivos

- Que aprendan a modelar un problema de un dominio no-trivial.
- Que aprendan a documentar el trabajo realizado.
- Que practiquen trabajar en equipo con gente desconocida.

### Comentarios Adicionales

Las pautas son similares a las del TP1.

Quiero darles la mayor libertad posible para que los resuelvan como quieran. Incluso pueden no usar lo que vimos en clase si saben otra forma. Lo único que les pido es que:

- Estén hechos en TypeScript
- Todos los tipos de datos sean estáticos (o sea, que no haya ningún `any`)
- Me justifiquen en el oral por qué les pareció mejor opción que lo que vimos en clase

Todos los ejercicios van a ser ejecutables en consola nada más. Debe haber un comando en `package.json` que lo ejecute. No vamos a recibir ningún pedido de HTTP (para eso esta el TP3) ni a agregar ningún HTML o estilo a nada de esto (para eso esta el TP4). De nuevo, como lo que hicimos en clase.

Pueden asumir cosas que no están aclaradas explícitamente. De hecho, espero que lo hagan. Hice a propósito los enunciados un poco ambiguos. Lo que consideren que asumieron y no fue trivial, recomiendo fuertemente documentarlo. Sus compañeros van a tener que trabajar sobre eso en los próximos TPs.

Recuerden que, por lo general, la solución más simple es la mejor.

----

## Entrega

### Fecha

La fecha límite es el Miércoles 24 de Abril de 2024 a las 23:59 hs. Agreguen una `tag` en el repositorio que se llame `tp2`. Ese commit es el que voy a corregir. Si quieren cambiar una `tag` para que apunte a otro commit, probablemente van a tener que primero borrar la existente y después crearla de nuevo.

Por favor, mándenme un mail a <me@diegofreijo.com> cuando lo tengan listo.

### Código

Todo lo van a resolver en un repositorio de GitHub. Ya los cree yo. Me falta agregar a cada participante a su aplicación.

Les voy a pedir que el código que suban al repo sea un esqueleto de una aplicación MVC, como la que hicimos en clase de los cocineros para repartirnos las parejas. Es decir, que los 3 módulos estén bien definidos. Y adonde van a dedicar la mayor parte del tiempo va a ser el Modelo: que tenga los tipos de datos del dominio definidos y que posea funciones para resolver los casos de uso del enunciado.

El controlador va a solamente recibir lo que diga `index.ts` y pasar ciertos parámetros de prueba. La vista va a escribir en consola algo bien crudo.

### Git Flow

Les voy a pedir que usen la versión reducida de Git Flow que explique en la clase 2. Si crearon branches por funcionalidad, no los borren. Así puedo ver cómo estuvieron trabajando.

### Reporte

El reporte va a ser otra parte importante de esta entrega. Les pido que tenga el formato del que vimos de ejemplo en clase o algo similar. Lo mas importante es que aclaren todo lo que le haga la vida mas fácil a los que después van a tener que agregarle un backend y un frontend. Va a ser un archivo de Mark Down. Puede ser el `README.md` o algún otro archivo que quede clarísimo cual es para alguien que recién entra al repo. No se olviden de aclarar la forma de uso del código que hicieron (por ejemplo, que comando de `npm` ejecutar en cada caso).

### Defensa

Les voy a estar mandando horarios para que cada pareja se conecte y tengamos la devolución por Google Meet o Teams. Así no usamos la hora de clase para eso y aburrimos a los que se quedan esperando afuera.

----

## Aplicaciones

Cada aplicación esta escrita como lo diría el cliente. Excepto en las notas, que son las que arrancan con `>` en Mark Down.

1. [Scrapper de precios de Mercado Libre](app1.md)
2. [Gestor de contraseñas online](app2.md)
3. [Interprete de JavaScript online](app3.md)
4. [Scrapper de imagenes de Instagram](app4.md)
5. [Organizador de viajes usando AI](app5.md)
6. [Nuestro propio eCommerce](app6.md)
