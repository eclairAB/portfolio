<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from '../shared/SectionHeading.vue'

const { email, linkedin, github } = profile.contact
</script>

<template>
  <section id="contact" class="py-12">
    <v-container>
      <SectionHeading
        title="Contact"
        subtitle="Open to remote roles. The best way to reach me is email."
      />
      <div class="d-flex flex-wrap align-center ga-3">
        <v-btn
          v-if="email"
          :href="`mailto:${email}`"
          color="primary"
          size="large"
          prepend-icon="mdi-email-outline"
          class="text-none"
        >
          {{ email }}
        </v-btn>
        <v-btn
          v-if="linkedin"
          :href="linkedin"
          target="_blank"
          rel="noopener"
          variant="outlined"
          color="primary"
          size="large"
          prepend-icon="mdi-linkedin"
        >
          LinkedIn
        </v-btn>
        <v-btn
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener"
          variant="outlined"
          color="primary"
          size="large"
          prepend-icon="mdi-github"
        >
          GitHub
        </v-btn>
      </div>
    </v-container>
  </section>
</template>
