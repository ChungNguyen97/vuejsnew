<template>
  <footer class="footer">
    <h3>{{title}}</h3>
  </footer>
</template>

<script>
export default {
  name:'Footer',
  data(){
    return {
      title:'This is Footer'
    }
  }
}
</script>

<style scoped>
  footer.footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: orange;
    color: #fff;
  }
</style>