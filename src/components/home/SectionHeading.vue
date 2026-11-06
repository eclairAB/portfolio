<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <div class="mb-8">
    <h2 class="text-h4 font-weight-bold">{{ title }}</h2>
    <p v-if="subtitle" class="text-body-1 text-medium-emphasis mt-2">{{ subtitle }}</p>
  </div>
</template>
