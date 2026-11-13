<script setup lang="ts">
import { profile, cvUrl } from '../data/profile'
import SectionHeading from '../components/shared/SectionHeading.vue'
import ProjectCard from '../components/shared/ProjectCard.vue'
import ExperienceTimeline from '../components/shared/ExperienceTimeline.vue'
import SkillGroup from '../components/technical/SkillGroup.vue'
</script>

<template>
  <div class="fade-in">
    <section class="pt-10 pb-6">
      <v-container>
        <v-btn to="/" variant="text" prepend-icon="mdi-arrow-left" class="mb-4 ml-n4">
          Back to portfolio
        </v-btn>
        <h1 class="text-h3 font-weight-bold mb-3">Technical details</h1>
        <p class="text-body-1 text-medium-emphasis measure mb-6">
          Full stack, project internals and complete role history for developers and technical
          hiring managers.
        </p>
        <v-btn :href="cvUrl" download color="primary" prepend-icon="mdi-download">
          Download CV (PDF)
        </v-btn>
      </v-container>
    </section>

    <section id="stack" class="py-8">
      <v-container>
        <SectionHeading title="Tech stack" />
        <v-row>
          <v-col v-for="group in profile.skills" :key="group.category" cols="12" sm="6" md="3">
            <SkillGroup :category="group.category" :items="group.items" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="projects" class="py-8">
      <v-container>
        <SectionHeading title="Project deep-dives" />
        <v-row>
          <v-col v-for="project in profile.projects" :key="project.name" cols="12" md="6">
            <ProjectCard :project="project" detailed />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="experience-technical" class="py-8 bg-surface">
      <v-container>
        <SectionHeading title="Experience" />
        <ExperienceTimeline detailed />
      </v-container>
    </section>

    <section id="education" class="py-8">
      <v-container>
        <SectionHeading title="Education & languages" />
        <v-row>
          <v-col v-for="edu in profile.education" :key="edu.school" cols="12" md="6">
            <v-card variant="flat" border class="h-100">
              <v-card-item>
                <h3 class="text-subtitle-1 font-weight-bold">{{ edu.program }}</h3>
                <p class="text-body-1 text-medium-emphasis">
                  {{ edu.school }}<template v-if="edu.period"> · {{ edu.period }}</template>
                </p>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col v-if="profile.languages" cols="12" md="6">
            <v-card variant="flat" border class="h-100">
              <v-card-item>
                <h3 class="text-subtitle-1 font-weight-bold">Languages</h3>
                <p class="text-body-1 text-medium-emphasis">{{ profile.languages.join(', ') }}</p>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
        <ul v-if="profile.certifications?.length" class="pl-4 mt-4">
          <li v-for="c in profile.certifications" :key="c">{{ c }}</li>
        </ul>
      </v-container>
    </section>

    <section id="cv" class="py-12">
      <v-container>
        <v-btn :href="cvUrl" download color="primary" size="large" prepend-icon="mdi-download">
          Download CV (PDF)
        </v-btn>
      </v-container>
    </section>
  </div>
</template>
