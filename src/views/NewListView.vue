<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

const title = ref('')
const items = ref<string[]>([])
const newItem = ref('')

const addItem = () => {
  if (newItem.value.trim()) {
    items.value.push(newItem.value.trim())
    newItem.value = '' // Limpa o campo de input
  }
}

const saveList = () => {
  console.log('Título:', title.value)
  console.log('Itens:', items.value)

  // Redirecionar para página inicial após salvar
  router.push('/')
  // enviar para uma API
}
</script>

<template>
  <div class="new-list">
    <h1>Criar Nova Lista</h1>
    <div class="form-group">
      <label for="title">Título</label>
      <input id="title" v-model="title" type="text" placeholder="Digite o título da lista" />
    </div>
    <div class="form-group">
      <label for="item">Adicionar Item</label>
      <div class="add-item">
        <input
          id="item"
          v-model="newItem"
          type="text"
          placeholder="Digite o item"
          @keyup.enter="addItem"
        />
        <button @click="addItem">Adicionar</button>
      </div>
    </div>
    <ul class="item-list">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button class="save-button" @click="saveList">Salvar</button>
  </div>
</template>

<style scoped>
.new-list {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type='text'] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

.add-item {
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.item-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.item-list li {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 5px;
}

.save-button {
  width: 100%;
}
</style>
