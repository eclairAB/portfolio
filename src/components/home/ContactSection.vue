<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from './SectionHeading.vue'

const { email, phone, linkedin, github } = profile.contact
</script>

<template>
  <section id="contact" class="py-16">
    <v-container class="text-center" style="max-width: 820px">
      <SectionHeading
        title="Let's work together"
        subtitle="Tell me about your project and I'll get back to you."
      />
      <v-btn
        v-if="email"
        :href="`mailto:${email}`"
        color="primary"
        size="x-large"
        prepend-icon="mdi-email-outline"
        class="mb-6"
      >
        Email me
      </v-btn>
      <div class="d-flex flex-wrap justify-center ga-2">
        <v-btn v-if="email" :href="`mailto:${email}`" variant="text" class="text-none">
          {{ email }}
        </v-btn>
        <v-btn v-if="phone" :href="`tel:${phone}`" variant="text" prepend-icon="mdi-phone">
          {{ phone }}
        </v-btn>
        <v-btn
          v-if="linkedin"
          :href="linkedin"
          target="_blank"
          rel="noopener"
          variant="text"
          prepend-icon="mdi-linkedin"
        >
          LinkedIn
        </v-btn>
        <v-btn
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener"
          variant="text"
          prepend-icon="mdi-github"
        >
          GitHub
        </v-btn>
      </div>
    </v-container>
  </section>
</template>
