<script setup lang="ts">
import { profile } from '../../data/profile'
</script>

<template>
  <section id="top" class="py-16 py-md-24 fade-in">
    <v-container class="text-center" style="max-width: 820px">
      <p class="text-overline text-accent font-weight-bold">{{ profile.title }}</p>
      <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">{{ profile.name }}</h1>
      <p class="text-h6 text-medium-emphasis font-weight-regular mb-8">{{ profile.tagline }}</p>
      <div class="d-flex flex-wrap justify-center ga-3">
        <v-btn color="primary" size="large" href="#work">View my work</v-btn>
        <v-btn variant="outlined" color="primary" size="large" href="#contact">Get in touch</v-btn>
      </div>
    </v-container>
  </section>
</template>
