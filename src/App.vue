<template>
  <div>
    <!-- Cabecera global -->
    <AppHeader />
    
    <!-- Menú de Navegación (Pide el punto 2.2) -->
    <nav class="menu">
      <RouterLink to="/">Inicio</RouterLink> |
      <RouterLink to="/catalogo">Catálogo de Juegos</RouterLink> |
      <RouterLink to="/sobre-nosotros">Sobre Nosotros</RouterLink>
    </nav>

    <!-- Aquí se cargará la vista dependiendo de donde hagamos clic -->
    <main>
      <RouterView />
    </main>

    <!-- Pie de página global -->
    <AppFooter />
  </div>
</template>

<script>
// Importamos solo los componentes globales
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
/* Estilo global para toda la página */
body {
  background-color: #121212;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

/* Estilo del menú de navegación */
.menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #1e1e1e;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.menu a {
  text-decoration: none;
  color: #a0a0a0;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Efecto al pasar el ratón */
.menu a:hover {
  color: #4CAF50;
  background-color: rgba(76, 175, 80, 0.1);
}

/* Efecto para la página actual activa */
.menu a.router-link-exact-active {
  color: #121212;
  background-color: #4CAF50;
  box-shadow: 0 0 10px #4CAF50;
}
</style>