<template>
  <div id="app">
    <h1>Project List</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
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
        const response = await this.$axios.get('http://127.0.0.1:8000/admin/projects');
        this.projects = response.data;
        console.log(this.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
  }
};
</script>

<style scoped>

</style>
