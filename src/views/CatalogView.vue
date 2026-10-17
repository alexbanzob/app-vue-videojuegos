<template>
  <div class="pagina">
    <h2>Catálogo de Juegos</h2>

    <!-- Estados exigidos por la rúbrica (Punto 2.3) -->
    <p v-if="cargando">Cargando videojuegos desde Firebase...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <p v-else-if="listaVideojuegos.length === 0">No hay videojuegos registrados en la base de datos.</p>

    <!-- Si hay datos, mostramos las tarjetas -->
    <div v-else class="contenedor-juegos">
      <GameCard v-for="item in listaVideojuegos" :key="item.id" :juego="item" />
    </div>
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Importamos tu base de datos

export default {
  name: 'CatalogView',
  components: { GameCard },
  data() {
    return {
      listaVideojuegos: [],
      cargando: true,
      error: null
    }
  },
  async mounted() {
    try {
      // Conectamos con la colección "videojuegos" de tu Firestore
      const querySnapshot = await getDocs(collection(db, "videojuegos"));
      
      this.listaVideojuegos = querySnapshot.docs.map(doc => {
        const datosFirebase = doc.data();
        return {
          id: doc.id,
          // Adaptamos las palabras con tilde/ñ de Firebase a las variables de tu tarjeta
          titulo: datosFirebase.título, 
          genero: datosFirebase.genero,
          anyo: datosFirebase.año
        }
      });
    } catch (err) {
      console.error(err);
      this.error = "Error al intentar leer los datos de Cloud Firestore.";
    } finally {
      this.cargando = false; // Ocultamos el mensaje de "Cargando..."
    }
  }
}
</script>

<style scoped>
.pagina { text-align: center; padding: 1rem; }
.contenedor-juegos { display: flex; flex-wrap: wrap; justify-content: center; }
.error { color: red; font-weight: bold; }
</style>