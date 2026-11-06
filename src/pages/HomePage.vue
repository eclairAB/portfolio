<script setup lang="ts">
import { profile } from '../data/profile'
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ServicesGrid from '../components/home/ServicesGrid.vue'
import ProjectCard from '../components/home/ProjectCard.vue'
import ExperienceTimeline from '../components/home/ExperienceTimeline.vue'
import ContactSection from '../components/home/ContactSection.vue'
import SectionHeading from '../components/home/SectionHeading.vue'
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesGrid />
    <section id="work" class="py-12">
      <v-container>
        <SectionHeading title="Selected work" />
        <v-row>
          <v-col v-for="project in profile.projects" :key="project.name" cols="12" md="6" lg="4">
            <ProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <ExperienceTimeline />
    <ContactSection />
  </div>
</template>
