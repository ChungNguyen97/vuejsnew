<template>
  <div>
    <h3>Product</h3>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "App",
  methods: {
    getList() {
      this.axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data);
      });
      
    },
    getList()
  },
};
</script>