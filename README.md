# Catálogo de Videojuegos (Vue + Firebase)

## 1. Temática y descripción
Esta aplicación es un **Catálogo de Videojuegos** desarrollado con Vue.js. Permite a los usuarios navegar por diferentes páginas mediante Vue Router y visualizar una lista de videojuegos que se lee en tiempo real desde una base de datos de Cloud Firestore.

## 2. Instrucciones de ejecución y despliegue
Para clonar y probar este proyecto localmente, sigue estos pasos:

**Instalar dependencias:**
\`\`\`bash
npm install
\`\`\`

**Ejecutar localmente en modo desarrollo:**
\`\`\`bash
npm run dev
\`\`\`

**Generar la versión de producción:**
\`\`\`bash
npm run build
\`\`\`

**Desplegar en Firebase Hosting:**
\`\`\`bash
firebase deploy --only hosting
\`\`\`

## 3. Relación de componentes propis
La aplicación utiliza los siguientes componentes propios, además de `App.vue`:
* **`AppHeader.vue`**: Muestra el encabezado principal de la web con el título del catálogo y un diseño personalizado.
* **`AppFooter.vue`**: Muestra el pie de página con información sobre la autoría y la actividad.
* **`GameCard.vue`**: Es la tarjeta visual que recibe los datos de un videojuego y los muestra en pantalla de forma estructurada.

## 4. Comunicación mediante Props (Pare a Fill)
En esta web, el componente padre **`CatalogView.vue`** lee la lista de juegos de Firestore y se la pasa al componente hijo **`GameCard.vue`** a través de un bucle `v-for`. 

* **Padre:** `CatalogView.vue`
* **Hijo:** `GameCard.vue`
* **Datos pasados:** Se pasa un objeto completo con los datos del videojuego (`titulo`, `genero`, `anyo`) mediante la prop `:juego="item"`.
El hijo declara la prop `juego` de tipo `Object` y simplemente muestra la información (por ejemplo, `{{ juego.titulo }}`) sin modificarla directamente.

## 5. Rutas configuradas (Vue Router)
Se han configurado 3 rutas principales:
1. **`/` (Inicio):** Carga `HomeView.vue`, mostrando el mensaje de bienvenida a la web.
2. **`/catalogo` (Catálogo de Juegos):** Carga `CatalogView.vue`, donde se gestionan los estados de carga y errores, y se muestran los datos leídos de Firestore.
3. **`/sobre-nosotros` (Sobre Nosotros):** Carga `AboutView.vue`, mostrando información sobre el contexto académico de la actividad.

## 6. Base de datos (Cloud Firestore)
* **Colección utilizada:** `videojuegos`
* **Campos principales:** `titulo` (String), `genero` (String), `anyo` (Number / int64).
* **Vista que los muestra:** Los datos se leen y renderizan en la vista `CatalogView.vue`.

## 7. Enlace a la web publicada
La aplicación está publicada y accesible a través de Firebase Hosting en la siguiente URL:
https://vue-project2-8a1db.web.app

## 8. Captura de pantalla de Firestore
*(Sustituye este texto por tu captura de pantalla de la colección de Firebase)*
![Captura de Firestore](./captura-firestore.png)