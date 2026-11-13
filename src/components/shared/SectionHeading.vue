<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <div class="mb-6">
    <div class="d-flex flex-wrap align-baseline justify-space-between ga-2">
      <h2 class="text-h4 font-weight-bold">{{ title }}</h2>
      <slot />
    </div>
    <p v-if="subtitle" class="text-body-1 text-medium-emphasis mt-2 measure">{{ subtitle }}</p>
  </div>
</template>
