<script setup lang="ts">
defineProps<{ steps: string[]; caption?: string }>()
</script>

<template>
  <figure class="flow pa-3 rounded bg-background">
    <ol class="d-flex flex-wrap align-center ga-2" :aria-label="`Flow: ${steps.join(', then ')}`">
      <li v-for="(step, i) in steps" :key="step" class="d-flex align-center ga-2">
        <span class="flow-step text-body-2 font-weight-medium px-3 py-1 rounded">{{ step }}</span>
        <v-icon
          v-if="i < steps.length - 1"
          icon="mdi-arrow-right"
          size="small"
          color="accent"
          aria-hidden="true"
        />
      </li>
    </ol>
    <figcaption v-if="caption" class="text-body-2 text-medium-emphasis mt-2">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.flow ol {
  list-style: none;
  padding: 0;
}
.flow-step {
  border: 1px solid rgba(var(--v-theme-primary), 0.5);
  color: rgb(var(--v-theme-primary));
  background: rgb(var(--v-theme-surface));
}
</style>
