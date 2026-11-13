<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from '../shared/SectionHeading.vue'
</script>

<template>
  <section id="how-i-work" class="py-10">
    <v-container>
      <SectionHeading title="How I work" />
      <p class="text-body-1 measure">{{ profile.howIWork }}</p>
    </v-container>
  </section>
</template>
