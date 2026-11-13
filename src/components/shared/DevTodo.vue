<script setup lang="ts">
// Shows TODO(owner) notes during `npm run dev` only. Production builds render nothing.
defineProps<{ items: string[] }>()
const isDev = import.meta.env.DEV
</script>

<template>
  <div v-if="isDev && items.length" class="dev-todo text-body-2 pa-3 rounded">
    <strong>TODO(owner):</strong>
    <ul class="pl-4">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.dev-todo {
  border: 2px dashed rgb(var(--v-theme-error));
  color: rgb(var(--v-theme-error));
}
</style>
