<template>
  <div class="hello">
        <img src="../assets/logo.png">

    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      title: "This is Home page",
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
