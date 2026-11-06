<script setup lang="ts">
import type { Project } from '../../data/profile'

defineProps<{ project: Project }>()
</script>

<template>
  <v-card variant="outlined" class="h-100 d-flex flex-column">
    <v-card-item
      ><h3 class="text-h6">{{ project.name }}</h3></v-card-item
    >
    <v-card-text class="flex-grow-1">
      <div class="d-flex flex-wrap ga-2 mb-3">
        <v-chip v-for="t in project.tech" :key="t" color="accent" variant="tonal" size="small">
          {{ t }}
        </v-chip>
      </div>
      <p v-if="project.technicalNotes" class="text-body-2">{{ project.technicalNotes }}</p>
      <p v-if="project.outcome" class="text-body-2 font-weight-bold mt-2">
        Result: {{ project.outcome }}
      </p>
    </v-card-text>
    <v-card-actions v-if="project.link || project.repo">
      <v-btn
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener"
        color="primary"
        append-icon="mdi-open-in-new"
      >
        Live
      </v-btn>
      <v-btn
        v-if="project.repo"
        :href="project.repo"
        target="_blank"
        rel="noopener"
        color="primary"
        append-icon="mdi-github"
      >
        Repo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
