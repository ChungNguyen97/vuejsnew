<template>
  <div>
    <h3>{{ title }}</h3>
    <section></section>
    <p>{{ getList() }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "ProductList",
  data() {
    return {
      title: "List Product",
      listProduct: [],
    };
  },
  methods: {
    getList() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.listProduct = response.data;
        });
    },
  },
};
</script>