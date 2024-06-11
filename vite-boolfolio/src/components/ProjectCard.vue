<template>
    <div class="card">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: Object
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  h2 {
    margin: 0 0 0.5rem 0;
  }
  </style>
  