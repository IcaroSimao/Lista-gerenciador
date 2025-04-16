<template>
  <div>
    <h1>List Manager</h1>
    <input v-model="newItem" @keyup.enter="addItem" placeholder="Add a new item" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ListManager',
  setup() {
    const newItem = ref('');
    const items = ref<string[]>([]);

    const addItem = () => {
      if (newItem.value.trim()) {
        items.value.push(newItem.value.trim());
        newItem.value = '';
      }
    };

    const removeItem = (index: number) => {
      items.value.splice(index, 1);
    };

    return {
      newItem,
      items,
      addItem,
      removeItem,
    };
  },
});
</script>

<style scoped>
/* Add any specific styles for the ListManager component here */
</style>