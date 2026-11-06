<script setup lang="ts">
import type { Project } from '../../data/profile'

defineProps<{ project: Project }>()
</script>

<template>
  <v-card variant="flat" border class="h-100 d-flex flex-column">
    <v-card-item>
      <h3 class="text-h6">{{ project.name }}</h3>
    </v-card-item>
    <v-card-text class="text-body-1 flex-grow-1">
      <p>{{ project.clientSummary }}</p>
      <p v-if="project.outcome" class="mt-3 font-weight-bold text-primary">
        <v-icon icon="mdi-trending-up" size="small" class="mr-1" />{{ project.outcome }}
      </p>
    </v-card-text>
    <v-card-actions v-if="project.link">
      <v-btn
        :href="project.link"
        target="_blank"
        rel="noopener"
        color="primary"
        append-icon="mdi-open-in-new"
      >
        Live site
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
