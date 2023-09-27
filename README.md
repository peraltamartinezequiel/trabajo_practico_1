<!-- TÍTULO Y DESCRIPCIÓN -->
  <a name="ir-arriba"></a>
  # 💻 Trabajo Práctico 1

  Trabajo Práctico N°1 para la materia **Laboratorio de Programación IV** de la Tecnicatura Universitaria en Programación.
  
  El objetivo de este trabajo es la implementación de una API con Express.js. Para este proyecto decidimos utilizar la API de <a href="https://www.igdb.com/" target="_blank">IGDB (Internet Game Database)</a>.

<!-- ÍNDICE -->
  <a name="indice"></a>
  ## 📌 Índice
  <ol>
    <li><a href="#ir-arriba">Título y descripción del proyecto</a></li>
    <li><a href="#tecnologias">Tecnologías utilizadas</a></li>
    <li><a href="#web">Web</a></li>
    <li><a href="#instalacion">Instalación</a></li>
    <li><a href="#documentacion">Documentación</a></li>
    <li><a href="#funcionalidad">Funcionalidad de la App</a></li>
    <li><a href="#desarrolladores">Desarrolladores</a></li>
  </ol>


<!-- TECNOLOGÍAS UTILIZADAS -->
  <a name="tecnologias"></a>
  ## ✅ Tecnologías utilizadas
  <p align="center">
    <a href="" target="_blank">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    </a>
    <a href="https://nodejs.org/es" target="_blank">
      <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
    </a>
    <a href="https://expressjs.com/es/" target="_blank">
      <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express">
    </a>
     <a href="https://render.com/" target="_blank">
      <img src="https://img.shields.io/badge/Render-%234351e8.svg?style=for-the-badge&logo=render&logoColor=white&">
    </a>
    <a href="https://www.postman.com/" target="_blank">
      <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
    </a>
    <a href="https://github.com/" target="_blank">
      <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
    </a>
  </p>
  <p align="right">(<a href="#ir-arriba">Ir arriba</a>)</p>


<!-- WEB -->
  <a name="web"></a>
  ## 🔗 Web
  Link de la página: https://trabajo-practico-1.onrender.com

  Para probar la api hace falta agregar `/api/v1/` y el endpoint que quiera consultar.

  Ejemplo: `https://trabajo-practico-1.onrender.com/api/v1/juegos`

  <p align="right">(<a href="#ir-arriba">Ir arriba</a>)</p>

<!-- INSTALACIÓN -->
  <a name="instalacion"></a>
  ## 🔧 Instalación
  Si deseas correr la aplicación en un entorno local debes tener en cuenta lo siguiente: 
  
  1. Clona el repositorio utilizando GIT o descargando el archivo ZIP:

        `git clone https://github.com/peraltamartinezequiel/trabajo_practico_1.git`    
  </br>

  2. Instala las dependencias con NPM.
  
        `npm install`
  </br>

  3. Para hacer consultas a la API es necesario:  
     - Tener una cuenta de [Twitch](https://www.twitch.tv/).
     - Habilitar la opción de [Autenticación de factor doble](https://www.twitch.tv/settings/security).
     - Registrar la aplicación en el portal de [Twitch Developers](https://dev.twitch.tv/console/apps/create).
     - Selecciona la opción de [administrar](https://dev.twitch.tv/console/apps) en tu aplicación.
     - Genera un Secreto de cliente al presionar 'Secreto nuevo'.
     - Toma nota de tu ID de cliente y Secreto de cliente. 
     - Haga un POST request a `https://id.twitch.tv/oauth2/token` con los siguientes parámetros:  
 
           client_id=Su ID de cliente
           client_secret=Su Secreto de cliente
           grant_type=client_credentials
  
     - La respuesta contedrá el token y su expiración.
     - Para probar la API deberá ingresar al archivo sample.env y renombralo a .env. Luego coloca tu ID de cliente y el token donde lo indique.  
  </br>

   3. Una vez lo hayas ejecutado debes dirigirte a `http://localhost:3000/api/v1` + el endpoint.

      
  <p align="right">(<a href="#ir-arriba">Ir arriba</a>)</p>
  
<!-- DOCUMENTACIÓN -->
  <a name="documentacion"></a>
  ## 📝 Documentación

  Link de la documentación: https://documenter.getpostman.com/view/17933955/2s9YJZ3Q2D

  Para probarla deberas apretar el botón de 'Run in postman'.
  Una vez importada la colección, recomendamos crear las variables de `client_id`, `token` y `local` (o url de la página web). O bien puede simplemente remplazarlas con los valores correspondientes.

  <p align="right">(<a href="#ir-arriba">Ir arriba</a>)</p>

<!-- FUNCIONALIDAD DE LA APP -->
  <a name="funcionalidad"></a>
  ## ⚙️ Funcionalidad de la App
  La aplicación cuenta con los siguientes endpoints:
  <ul>
    <li>/juegos</li>
    <li>/juegos/{id}</li>
    <li>/juegos/filtrar?name={nombre}</li>
    <li>/personajes/populares</li>
    <li>/personajes/populares/{id}</li>
    <li>/personajes/populares_params?name={nombre}&slug={slug}</li>
  </ul>
  <p align="right">(<a href="#ir-arriba">Ir arriba</a>)</p>


<!-- CONTACTO -->
 <a name="desarrolladores"></a>
  ## 📩 Desarrolladores
   - Tatiana Gutiérrez 
   - Ezequiel Peralta
  
   Link del proyecto: https://github.com/peraltamartinezequiel/trabajo_practico_1
  <p align="right">(<a href="#ir-arriba">Ir arriba</a>)</p>