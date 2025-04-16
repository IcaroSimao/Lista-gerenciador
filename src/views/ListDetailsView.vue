<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ id?: string }>()
</script>

<template>
  <div>
    <h1>Detalhes da Lista</h1>
    <p>ID da lista: {{ id }}</p>
  </div>
</template>
