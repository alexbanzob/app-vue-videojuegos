<template>
  <div class="tarjeta">
    <h2>{{ juego.titulo }}</h2>
    <p><strong>Género:</strong> {{ juego.genero }}</p>
    <p><strong>Año:</strong> {{ juego.anyo }}</p>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    juego: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.tarjeta {
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-left: 5px solid #4CAF50; /* Línea verde de adorno a la izquierda */
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  width: 260px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efecto Hover (al pasar el ratón) */
.tarjeta:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
  border-color: #4CAF50;
}

.tarjeta h2 {
  color: #4CAF50;
  margin-top: 0;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.tarjeta p {
  font-size: 1.1rem;
  line-height: 1.5;
}
</style>