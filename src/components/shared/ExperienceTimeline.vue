<script setup lang="ts">
import { profile } from '../../data/profile'

/** Compact by default (first CV bullet only); `detailed` shows every bullet. */
defineProps<{ detailed?: boolean }>()
</script>

<template>
  <v-timeline side="end" align="start" density="compact" truncate-line="both">
    <v-timeline-item
      v-for="job in profile.experience"
      :key="job.company + job.period"
      dot-color="primary"
      size="small"
    >
      <div class="mb-4">
        <p class="text-body-2 text-medium-emphasis">{{ job.period }}</p>
        <h3 class="text-subtitle-1 font-weight-bold">{{ job.role }} · {{ job.company }}</h3>
        <ul v-if="detailed" class="pl-4 text-body-1 mt-1">
          <li v-for="h in job.highlights" :key="h">{{ h }}</li>
        </ul>
        <p v-else-if="job.highlights[0]" class="text-body-1 mt-1">{{ job.highlights[0] }}</p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
