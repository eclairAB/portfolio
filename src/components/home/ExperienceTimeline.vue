<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="experience" class="py-12 bg-surface">
    <v-container style="max-width: 820px">
      <SectionHeading title="Experience" />
      <v-timeline side="end" align="start" density="compact" truncate-line="both">
        <v-timeline-item
          v-for="job in profile.experience"
          :key="job.company + job.period"
          dot-color="primary"
          size="small"
        >
          <div class="mb-4">
            <p class="text-caption text-medium-emphasis">{{ job.period }}</p>
            <h3 class="text-subtitle-1 font-weight-bold">{{ job.role }}</h3>
            <p class="text-body-2 text-medium-emphasis mb-2">{{ job.company }}</p>
            <ul class="pl-4 text-body-2">
              <li v-for="h in job.clientHighlights" :key="h">{{ h }}</li>
            </ul>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>
