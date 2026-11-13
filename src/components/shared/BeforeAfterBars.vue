<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string; before: number; after: number; unit: string }>()
const max = computed(() => Math.max(props.before, props.after))
const rows = computed(() => [
  { name: 'Before', value: props.before, color: 'accent' },
  { name: 'After', value: props.after, color: 'primary' },
])
</script>

<template>
  <figure class="pa-3 rounded bg-background">
    <figcaption class="text-body-2 font-weight-medium mb-2">{{ label }}</figcaption>
    <div v-for="row in rows" :key="row.name" class="d-flex align-center ga-3 mb-1">
      <span class="text-body-2 text-medium-emphasis bar-label">{{ row.name }}</span>
      <div class="flex-grow-1">
        <div
          :class="`bg-${row.color} rounded`"
          :style="{ width: `${(row.value / max) * 100}%`, height: '12px' }"
          aria-hidden="true"
        />
      </div>
      <span class="text-body-2 font-weight-bold bar-value">{{ row.value }}{{ unit }}</span>
    </div>
  </figure>
</template>

<style scoped>
.bar-label {
  width: 3.5rem;
}
.bar-value {
  width: 2.5rem;
  text-align: right;
}
</style>
