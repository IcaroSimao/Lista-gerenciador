<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Listas</RouterLink>
        <RouterLink to="/about">Sobre eu</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f9fa; /* Cor de fundo do menu */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para destaque */
  z-index: 1000; /* Garante que o menu fique acima de outros elementos */
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  color: #007bff; /* Cor ao passar o mouse */
}

body {
  padding-top: 60px; /* Adiciona espaço para o menu fixo */
}
</style>
