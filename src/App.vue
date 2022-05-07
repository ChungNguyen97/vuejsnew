<template>
  <div id="app">
    <header class="header">
      <div class="header__content">
        <div class="left">
          <!-- <router-link :to="{ name: 'Hello' }">Home</router-link> -->
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/task">Task</router-link>
          <router-link to="/product">Product</router-link>
        </div>
        <div class="right">
          <router-link to="register">Register</router-link>
          <router-link to="login">Login</router-link>
        </div>
      </div>
    </header>
    <main id="main">
      <router-view />
    </main>
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
  margin: 0 auto;
}
main#main{
  width: 1200px;
  margin: 0 auto;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header {
  background: #333;
}
.header__content {
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
.header a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-block;
  padding: 8px 12px;
}
.header a:hover {
  color: blue;
  background-color: #ccc;
}
</style>
