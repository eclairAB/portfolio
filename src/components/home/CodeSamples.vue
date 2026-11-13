<script setup lang="ts">
import { profile } from '../../data/profile'
import SectionHeading from '../shared/SectionHeading.vue'
import DevTodo from '../shared/DevTodo.vue'

const todo = [
  'Choose 2–3 public repos with good READMEs and add them to `codeSamples` in profile.ts. A small public Laravel project (for example a payment webhook handler with tests) would fill the biggest gap. Do not list repos that do not exist.',
]
</script>

<template>
  <section v-if="profile.codeSamples.length" id="code" class="py-10">
    <v-container>
      <SectionHeading title="Code samples" />
      <v-row>
        <v-col v-for="repo in profile.codeSamples" :key="repo.url" cols="12" md="4">
          <v-card
            variant="flat"
            border
            class="h-100"
            :href="repo.url"
            target="_blank"
            rel="noopener"
          >
            <v-card-item>
              <h3 class="text-h6 font-weight-bold">
                <v-icon icon="mdi-github" size="small" class="mr-1" aria-hidden="true" />{{
                  repo.name
                }}
              </h3>
            </v-card-item>
            <v-card-text class="text-body-1">{{ repo.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <v-container v-else>
    <DevTodo :items="todo" />
  </v-container>
</template>
