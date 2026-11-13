<script setup lang="ts">
import { profile, cvUrl } from '../../data/profile'
</script>

<template>
  <section id="top" class="pt-10 pb-8 pt-md-16 pb-md-12 fade-in">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="7">
          <p class="text-overline text-accent font-weight-bold">{{ profile.title }}</p>
          <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">{{ profile.name }}</h1>
          <p class="text-h6 font-weight-regular mb-6 measure">{{ profile.tagline }}</p>
          <div class="d-flex flex-wrap ga-3 mb-4">
            <v-btn :href="cvUrl" download color="primary" size="large" prepend-icon="mdi-download">
              Download CV
            </v-btn>
            <v-btn variant="outlined" color="primary" size="large" href="#work">
              View selected work
            </v-btn>
            <v-btn
              v-if="profile.contact.email"
              :href="`mailto:${profile.contact.email}`"
              variant="text"
              color="primary"
              size="large"
              prepend-icon="mdi-email-outline"
            >
              Email me
            </v-btn>
          </div>
          <p class="text-body-1 d-flex align-center ga-2">
            <span class="status-dot" aria-hidden="true" />{{ profile.availability }}
          </p>
        </v-col>

        <v-col cols="12" md="5">
          <v-card variant="flat" border class="results-card pa-2">
            <v-card-item>
              <h2 class="text-subtitle-1 font-weight-bold">Results</h2>
            </v-card-item>
            <v-card-text>
              <dl class="results-grid">
                <div v-for="r in profile.keyResults" :key="r.value">
                  <dt class="text-h5 font-weight-bold text-primary">{{ r.value }}</dt>
                  <dd class="text-body-2">{{ r.label }}</dd>
                </div>
              </dl>
              <h2 class="text-subtitle-1 font-weight-bold mt-5 mb-2">Core stack</h2>
              <ul class="d-flex flex-wrap ga-2 chip-list">
                <li v-for="t in profile.heroStack" :key="t">
                  <v-chip color="primary" variant="tonal" size="small">{{ t }}</v-chip>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.results-card {
  border-left: 4px solid rgb(var(--v-theme-accent)) !important;
}
.results-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem 1.25rem;
}
.results-grid dd {
  margin: 0;
}
.chip-list {
  list-style: none;
  padding: 0;
}
.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 0 0 4px rgba(var(--v-theme-primary), 0.2);
  flex-shrink: 0;
}
</style>
