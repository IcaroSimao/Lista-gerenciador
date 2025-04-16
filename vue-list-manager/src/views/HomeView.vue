<template>
  <div>
    <h1>Welcome to LiGeren</h1>
    <p>This is your simple list manager application.</p>
    <ListManager />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListManager from '@/components/ListManager.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ListManager,
  },
});
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 1.2em;
}
</style>