<script setup lang="ts">
import { profile } from '../data/profile'
import SectionHeading from '../components/home/SectionHeading.vue'
import SkillGroup from '../components/technical/SkillGroup.vue'
import ProjectDetail from '../components/technical/ProjectDetail.vue'

const cvUrl = `${import.meta.env.BASE_URL}Alan-Golpeo-Web-Developer-CV.pdf`
</script>

<template>
  <div class="fade-in">
    <section class="py-12">
      <v-container>
        <v-btn to="/" variant="text" prepend-icon="mdi-arrow-left" class="mb-4 ml-n4">
          Back to portfolio
        </v-btn>
        <h1 class="text-h3 font-weight-bold mb-3">Technical details</h1>
        <p class="text-body-1 text-medium-emphasis" style="max-width: 680px">
          Stack, project internals and full role history for developers and technical hiring
          managers.
        </p>
      </v-container>
    </section>

    <section id="stack" class="py-8">
      <v-container>
        <SectionHeading title="Tech stack" />
        <v-row>
          <v-col v-for="group in profile.skills" :key="group.category" cols="12" sm="6" md="4">
            <SkillGroup :category="group.category" :items="group.items" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section v-if="profile.aiWorkflow" id="ai-workflow" class="py-8">
      <v-container>
        <SectionHeading title="AI-assisted workflow" :subtitle="profile.aiWorkflow.intro" />
        <v-row>
          <v-col
            v-for="practice in profile.aiWorkflow.practices"
            :key="practice.title"
            cols="12"
            sm="6"
            lg="3"
          >
            <v-card variant="outlined" class="h-100">
              <v-card-item>
                <v-icon :icon="practice.icon" color="primary" class="mb-2" />
                <h3 class="text-subtitle-1 font-weight-bold">{{ practice.title }}</h3>
              </v-card-item>
              <v-card-text class="text-body-2">{{ practice.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="projects" class="py-8">
      <v-container>
        <SectionHeading title="Project deep-dives" />
        <v-row>
          <v-col v-for="project in profile.projects" :key="project.name" cols="12" md="6">
            <ProjectDetail :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="experience-technical" class="py-8">
      <v-container style="max-width: 900px">
        <SectionHeading title="Experience" />
        <v-timeline side="end" align="start" density="compact" truncate-line="both">
          <v-timeline-item
            v-for="job in profile.experience"
            :key="job.company + job.period"
            dot-color="primary"
            size="small"
          >
            <div class="mb-4">
              <p class="text-caption text-medium-emphasis">{{ job.period }}</p>
              <h3 class="text-subtitle-1 font-weight-bold">{{ job.role }} · {{ job.company }}</h3>
              <ul class="pl-4 text-body-2 mt-1">
                <li v-for="h in job.highlights" :key="h">{{ h }}</li>
              </ul>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </section>

    <section id="education" class="py-8">
      <v-container>
        <SectionHeading title="Education & languages" />
        <v-row>
          <v-col v-for="edu in profile.education" :key="edu.school" cols="12" md="6">
            <v-card variant="outlined" class="h-100">
              <v-card-item>
                <h3 class="text-subtitle-1 font-weight-bold">{{ edu.program }}</h3>
                <p class="text-body-2 text-medium-emphasis">
                  {{ edu.school }}<template v-if="edu.period"> · {{ edu.period }}</template>
                </p>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col v-if="profile.languages" cols="12" md="6">
            <v-card variant="outlined" class="h-100">
              <v-card-item>
                <h3 class="text-subtitle-1 font-weight-bold">Languages</h3>
                <p class="text-body-2 text-medium-emphasis">{{ profile.languages.join(', ') }}</p>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
        <ul v-if="profile.certifications?.length" class="pl-4 mt-4">
          <li v-for="c in profile.certifications" :key="c">{{ c }}</li>
        </ul>
      </v-container>
    </section>

    <section id="cv" class="py-12 text-center">
      <v-btn :href="cvUrl" download color="primary" size="large" prepend-icon="mdi-download">
        Download CV (PDF)
      </v-btn>
    </section>
  </div>
</template>
