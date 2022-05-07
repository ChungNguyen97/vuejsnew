<template>
  <div class="taskList">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      title: "Task List",
      issues: [
        "Vue CLI",
        "Component",
        "Component in-depth",
        "binding",
        "Event handling",
        "Rendering",
        "Component communication",
        "Lifecycle hook",
        "Form input binding",
        "Routing",
        "API Calls",
        "Vuex",
        "Internationalization",
      ],
    };
  },
};
</script>

<style scoped>
</style>