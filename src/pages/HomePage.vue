<script setup lang="ts">
import { profile } from '../data/profile'
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import HowIWork from '../components/home/HowIWork.vue'
import CodeSamples from '../components/home/CodeSamples.vue'
import ContactSection from '../components/home/ContactSection.vue'
import ProjectCard from '../components/shared/ProjectCard.vue'
import ExperienceTimeline from '../components/shared/ExperienceTimeline.vue'
import SectionHeading from '../components/shared/SectionHeading.vue'
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <section id="work" class="py-10">
      <v-container>
        <SectionHeading title="Selected work" />
        <v-row>
          <v-col v-for="project in profile.projects" :key="project.name" cols="12" md="6">
            <ProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <HowIWork />
    <CodeSamples />
    <section id="experience" class="py-10 bg-surface">
      <v-container>
        <SectionHeading title="Experience">
          <router-link to="/technical#experience-technical" class="text-primary">
            Full role history
          </router-link>
        </SectionHeading>
        <ExperienceTimeline />
      </v-container>
    </section>
    <ContactSection />
  </div>
</template>
