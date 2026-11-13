<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from '../shared/SectionHeading.vue'
</script>

<template>
  <section id="about" class="py-10 bg-surface">
    <v-container>
      <SectionHeading title="About me" />
      <p class="text-body-1 mb-4 measure">{{ profile.summary }}</p>
      <p v-if="profile.location" class="text-body-1 text-medium-emphasis">
        <v-icon icon="mdi-map-marker-outline" size="small" class="mr-1" aria-hidden="true" />{{
          profile.location
        }}
      </p>
    </v-container>
  </section>
</template>
