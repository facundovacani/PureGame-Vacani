# PureGame

**Un e-commerce de videojuegos clásicos**

## Idea
La idea de esta app es que tenga un catálogo, en el cual se veran muchos de los precursores de los videojuegos actuales. Los cuales escasean en stock a nivel mundial (los originales). 

Tiene un enfoque retro. Ya que simboliza a las consolas retros de los años 80's, 90's.

Elegí este contenido, ya que fueron los juegos con los que me crié. Y como queda poco stock de los mismos, quería mostrar esos juegos clásicos en una tienda ficticia. Intentaré que estos tengan más juegos de los mostrados a lo largo del proyecto. Tomé esta decisión por mi gran apego hacia esos juegos clásicos de mi niñez.

## Navegación por la app

Selección de producto.

![Demostration](https://i.giphy.com/media/qPKThd36gAH0xllCFJ/giphy.webp)

Navegando por las categorias. 

![Demostration](https://i.giphy.com/media/K0m8W0BV1fh4bcijD6/giphy.webp)

Llenando formulario.

![Demostration](https://i.giphy.com/media/sAkZyrce5pF8A0q1Nh/giphy.webp)

Versión responsive.

![Demostration](https://media.giphy.com/media/42wXQBFjHft0yRtp6S/giphy-downsized-large.gif)


## ¿Por qué lo hice?

Lo hice para un curso de ReactJS de CoderHouse. Este proyecto fue el realizado durante el transcurso curso. Con una duración de 2 meses y medio, durante una serie de desafíos semanales y una entrega intermedia y final.

## Features

- Mi software fue creado para simular la compra de videojuegos físicos que escasean en el mercado. 
- Se puede "comprar" el producto desde la vista detallada del mismo.
- También se puede "adquirir" un producto directamente desde el inicio o en las categorías.

## Tools utilizados para construir la app

- **ReactJS**
- **Create React App** - Utilicé create-react-app ya que descarga un proyecto de react con scripts y un repositorio local de git ya para ser modificados.
- **React Router DOM** - Utilizamos React Router DOM para poder navegar en la mismoa Single Page Aplication, para no tener que pasar de una página a otra. Ya que sería una sola página.
- **Firebase's Firestore** - Utilizamos la base de datos  de google para poder realizar peticiones reales. Utilizando los métodos de firebase. Sin utilizar back-end en nuestra app.

## Dependencias

La versión de React fue la **17.0.2**.
Utilicé la versión **16.13.1** de **node.js** y la versión **8.3.0** de **npm**.
Utilizamos **React-Router-Dom** la versión **5.2.0**.
Este proyecto utiliza **firebase 8.8.0**.

## Dependencias extras

Utilicé Font Awesome - React para el icono del carrito. Y para utilizar futuros iconos en la aplicación. 
La versión del mismo fue la v5.

También utilicé una fuente de google fonts.

## Como configurar la app
- Clonar el repositorio, navegar al repositorio y utilizar el comando *npm i* o *npm install*
- Después que termine de instalar. Ejecutamos el comando *npm start*.
- El proyecto se abrirá en su navegador de preferencia.
### Deploy:

- [https://pure-game.netlify.app/](https://pure-game.netlify.app/)

`Actualizado el 02/03/2022`

## Problemas de compatibilidad

No instalar la versión 9 de firebase. Ya que esta utiliza la versión 8 y hay varios métodos que no son compatibles.

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\ Abra [http://localhost:3000](http://localhost:3000) para verla en su navegador.

La página se volverá a cargar cuando realice cambios.\ También puede ver errores de pelusa en la consola.

### `npm test`

Inicia el corredor de prueba en el modo de visualización interactiva. Consulte la sección sobre [ejecutar pruebas] (https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\ Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash.\ ¡Su aplicación está lista para implementarse!

Consulte la sección sobre [implementación](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.