<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header class="header">
      <div class="left">
        <a href="/">Home</a>
        <a href="/task">Task</a>
        <a href="about">About</a>
        <a href="product">Product</a>
      </div>
      <div class="right">
        <a href="">Register</a>
        <a href="">Login</a>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1200px;
  margin: 0 auto;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header.header {
  background: #333;
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
}
.header a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-block;
  padding: 4px 12px;
}
.header a:hover {
  color: blue;
  background-color: #fff;
}
</style>
