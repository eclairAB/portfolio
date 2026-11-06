<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="services" class="py-12 bg-surface">
    <v-container>
      <SectionHeading title="What I can do for you" />
      <v-row>
        <v-col v-for="service in profile.services" :key="service.title" cols="12" sm="6" lg="3">
          <v-card variant="outlined" class="h-100 pa-2">
            <v-card-item>
              <v-icon :icon="service.icon" color="primary" size="32" class="mb-3" />
              <h3 class="text-h6">{{ service.title }}</h3>
            </v-card-item>
            <v-card-text class="text-body-1">{{ service.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
