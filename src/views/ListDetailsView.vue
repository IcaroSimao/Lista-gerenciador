<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import type { List } from '@/interfaces/list'
import { ListService } from '@/services/listService'

const route = useRoute()
const id = route.params.id
const list = ref({} as List)
const isLoading = ref(true)

const filterText = ref('')

const filteredItems = computed(() =>
  list.value.items.filter((item) =>
    item.name.toLowerCase().includes(filterText.value.toLowerCase()),
  ),
)

const checkItem = (index: number) => {
  list.value.items[index].checked = !list.value.items[index].checked
}

const fetchList = async () => {
  try {
    list.value = await ListService.getListById(Number(id))
  } catch (error) {
    // Adicionar um tratamento de erro mais robusto
    // Exibir uma mensagem de erro ao usuário ou registrar o erro
    console.error('Erro ao buscar lista:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchList)
</script>

<template>
  <div>
    <div style="display: flex; align-items: center; justify-content: space-between">
      <h1>{{ list.title }}</h1>
      <div class="filter">
        <input v-model="filterText" type="text" placeholder="Filtrar itens" />
      </div>
    </div>
    <div v-if="isLoading">Carregando...</div>
    <ul v-else style="padding: 0px; max-height: 70vh; overflow: auto">
      <li
        v-for="(item, index) in filteredItems"
        :key="index"
        style="list-style: none"
        @click="checkItem(index)"
      >
        <div class="item" :class="{ checked: item.checked }" style="display: flex">
          <span>{{ item.name }}</span>
        </div>
      </li>
    </ul>

    <div style="margin-top: 10px">
      <button @click="$router.back()">Voltar</button>
      <button @click="$router.push('/edit/' + id)">Editar</button>
      <button @click="$router.push('/delete/' + id)">Deletar</button>
      <button @click="$router.push('/share/' + id)">Compartilhar</button>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter input {
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.item {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

.item.checked span {
  text-decoration: line-through; /* Aplica o texto tachado */
  color: #999; /* Opcional: muda a cor do texto */
}
</style>
