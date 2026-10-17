<template>
  <header class="cabecera">
    <h1>Catálogo de Videojuegos</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.cabecera {
  background: linear-gradient(135deg, #1b5e20, #4CAF50);
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cabecera h1 {
  margin: 0;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>