<script setup lang="ts">
import type { Project } from '../../data/profile'
import FlowDiagram from './FlowDiagram.vue'
import BeforeAfterBars from './BeforeAfterBars.vue'
import DevTodo from './DevTodo.vue'

/** `detailed` adds implementation notes for the Technical page. */
defineProps<{ project: Project; detailed?: boolean }>()
</script>

<template>
  <v-card variant="flat" border class="h-100 d-flex flex-column">
    <v-card-item>
      <h3 class="text-h6 font-weight-bold">{{ project.name }}</h3>
    </v-card-item>

    <v-card-text class="text-body-1 flex-grow-1 d-flex flex-column ga-3">
      <img
        v-if="project.image"
        :src="project.image.src"
        :alt="project.image.alt"
        loading="lazy"
        class="w-100 rounded"
      />
      <FlowDiagram v-else-if="project.diagram" v-bind="project.diagram" />
      <BeforeAfterBars v-else-if="project.comparison" v-bind="project.comparison" />

      <dl class="project-facts">
        <dt>Problem</dt>
        <dd>{{ project.problem }}</dd>
        <dt>What I built</dt>
        <dd>{{ project.built }}</dd>
        <template v-if="detailed && project.technicalNotes">
          <dt>Technical notes</dt>
          <dd>{{ project.technicalNotes }}</dd>
        </template>
        <template v-if="project.result">
          <dt>Result</dt>
          <dd class="font-weight-bold text-primary">
            <v-icon icon="mdi-trending-up" size="small" class="mr-1" aria-hidden="true" />{{
              project.result
            }}
          </dd>
        </template>
      </dl>

      <ul class="d-flex flex-wrap ga-2 tech-list" aria-label="Stack">
        <li v-for="t in project.tech" :key="t">
          <v-chip color="primary" variant="tonal" size="small">{{ t }}</v-chip>
        </li>
      </ul>

      <DevTodo :items="project.todos ?? []" />
    </v-card-text>

    <v-card-actions v-if="project.link || project.repo" class="px-4 pb-4">
      <v-btn
        v-if="project.link"
        :href="project.link.href"
        target="_blank"
        rel="noopener"
        color="primary"
        variant="tonal"
        append-icon="mdi-open-in-new"
      >
        {{ project.link.label }}
      </v-btn>
      <v-btn
        v-if="project.repo"
        :href="project.repo"
        target="_blank"
        rel="noopener"
        color="primary"
        variant="text"
        append-icon="mdi-github"
      >
        Source code
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.project-facts dt {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgb(var(--v-theme-secondary));
}
.project-facts dd {
  margin: 0 0 0.75rem;
}
.project-facts dd:last-child {
  margin-bottom: 0;
}
.tech-list {
  list-style: none;
  padding: 0;
}
</style>
