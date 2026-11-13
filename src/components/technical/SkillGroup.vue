<script setup lang="ts">
defineProps<{ category: string; items: string[] }>()
</script>

<template>
  <v-card variant="flat" border class="h-100">
    <v-card-item>
      <h3 class="text-subtitle-1 font-weight-bold">{{ category }}</h3>
    </v-card-item>
    <v-card-text>
      <ul class="d-flex flex-wrap ga-2 chip-list">
        <li v-for="item in items" :key="item">
          <v-chip color="primary" variant="tonal" size="small">{{ item }}</v-chip>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.chip-list {
  list-style: none;
  padding: 0;
}
</style>
