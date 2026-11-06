<script setup lang="ts">
defineProps<{ category: string; items: string[] }>()
</script>

<template>
  <v-card variant="outlined" class="h-100">
    <v-card-item
      ><h3 class="text-subtitle-1 font-weight-bold">{{ category }}</h3></v-card-item
    >
    <v-card-text class="d-flex flex-wrap ga-2">
      <v-chip v-for="item in items" :key="item" color="primary" variant="tonal" size="small">
        {{ item }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>
