<template>
  <div>
    <h1>Projects</h1>
    <div v-if="projects.length">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <div v-else>
      <p>No projects found.</p>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await this.$axios.get('http://127.0.0.1:8000/api/public-projects');
        this.projects = response.data;
        console.log(this.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
  }
};
</script>
