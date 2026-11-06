<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="about" class="py-12">
    <v-container style="max-width: 820px">
      <SectionHeading title="About me" />
      <p class="text-body-1 mb-4">{{ profile.summary }}</p>
      <p v-if="profile.location" class="text-body-2 text-medium-emphasis">
        <v-icon icon="mdi-map-marker-outline" size="small" class="mr-1" />{{ profile.location }}
      </p>
    </v-container>
  </section>
</template>
