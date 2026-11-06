<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { profile } from '../data/profile'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.change(next)
  try {
    localStorage.setItem('theme', next)
  } catch {
    /* storage unavailable */
  }
}
</script>

<template>
  <v-app>
    <v-app-bar flat border="b" density="comfortable">
      <v-app-bar-title>
        <router-link to="/" class="text-decoration-none text-high-emphasis font-weight-bold">
          {{ profile.name }}
        </router-link>
      </v-app-bar-title>
      <v-btn to="/" exact variant="text" class="d-none d-sm-flex">Home</v-btn>
      <v-btn to="/technical" variant="text">Technical</v-btn>
      <v-btn
        :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
        @click="toggleTheme"
      />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer border="t" class="flex-column py-6 text-center">
      <router-link v-if="$route.name === 'home'" to="/technical" class="text-primary mb-2">
        Looking for the technical details?
      </router-link>
      <router-link v-else to="/" class="text-primary mb-2">Back to portfolio</router-link>
      <p class="text-body-2 text-medium-emphasis">
        © {{ new Date().getFullYear() }} {{ profile.name }}
      </p>
    </v-footer>
  </v-app>
</template>
