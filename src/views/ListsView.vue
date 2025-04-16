<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Exemplo de dados para as listas
const lists = ref([
  { id: 1, name: 'Mercado', type: 'SHOP' },
  { id: 2, name: 'Cronograma', type: 'DAILY' },
  { id: 3, name: 'Projetos pessoais', type: 'ANY' },
])
</script>

<template>
  <div class="lists">
    <div class="header">
      <h1>Minhas Listas</h1>
      <RouterLink to="/new" class="new-button">Novo</RouterLink>
    </div>
    <div class="grid">
      <RouterLink
        v-for="list in lists"
        :key="list.id"
        :to="{ name: 'list', params: { id: list.id } }"
        class="grid-item"
      >
        <h2>{{ list.name }}</h2>
        <p>Tipo: {{ list.type }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.lists {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 24px;
  margin: 0;
}

.new-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.new-button:hover {
  background-color: #0056b3;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsivo */
  gap: 20px; /* Espaçamento entre os itens */
}

.grid-item {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.grid-item h2 {
  margin: 0;
  font-size: 18px;
}

.grid-item p {
  margin: 5px 0 0;
  color: #666;
}
</style>
