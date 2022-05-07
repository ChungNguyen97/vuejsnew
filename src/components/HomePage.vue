<template>
  <div class="hello">
    <h3>
      {{ title }} <span>{{ fullname }}</span>
    </h3>
    <div class="content">
      <div class="vuejs">
        <img src="../assets/logo.png" />
        <img src="../assets/image/avanyou.jpg" alt="" />

        <p>{{ author }}</p>
      </div>

      <div class="appCyclone">
        <img src="../assets/image/appcyclone.jpg" alt="" />
      </div>
      <!-- <h4>Task cần hoàn thành: </h4>
    <p>{{ issues }}</p> -->
    </div>
    <div class="btnsControl">
      <a href="/task">Start with Isuses</a>
      <a class="product" href="/product">View more product</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "HomePage",
  data() {
    return {
      title: "Vuejs demo by",
      fullname: "Nguyen Van Chung",
      msg: "Welcome to Your Vue.js App",
      author: "Evan You",
      data: [],
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
  methods: {
    getList() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  /* margin-top: 12%; */
}
h3 {
  text-align: center;
  font-size: 60px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
}
h3 span {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 18px;
  padding: 48px 0;
  box-shadow: 1px 1px 5px #ccc;
}
.vuejs {
  width: 50%;
  text-align: center;
  border-right: 1px solid rgba(187, 187, 187, 0.541);
}
.vuejs img {
  width: 20%;
}
.appCyclone {
  flex: 1;
  text-align: center;
  padding-left: 12px;
}
.btnsControl {
  text-align: center;
}
.btnsControl a {
  display: inline-block;
  padding: 6px 16px;
  background-color: #42b883;
  color: #fff;
  margin: 10px 20px;
  border-radius: 8px;
  font-weight: 800;
  text-decoration: none;
  opacity: 0.9;
}
.btnsControl a.product {
  background-color: #f1f1f1;
  color: #476582;
}
.btnsControl a:hover {
  opacity: 1;
}
</style>
