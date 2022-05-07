<template>
  <div class="hello">
    <h3>
      {{ title }} <span>{{ fullname }}</span>
    </h3>
    <div class="content">
      <div class="vuejs">
        <article>
          <img src="../../assets/logo.png" />
          <p>Vue.js</p>
        </article>
      </div>

      <div class="appCyclone">
        <img src="../../assets/image/appcyclone.jpg" alt="" />
        <p>Apps Cyclone</p>
      </div>
    </div>
    <div class="btnsControl">
      <router-link to="/task">Start with Isuses</router-link>
      <router-link class="product" to="/product">View more product</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      title: "Vuejs demo by",
      fullname: "Nguyen Van Chung",
      data: [],
    
    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 80px;
}
h3 {
  text-align: center;
  font-size: 48px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto 48px;
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
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
    box-shadow: unset;
  }
  .vuejs {
    /* border-bottom: 1px solid #ccc; */
  }
  .vuejs,
  .appCyclone {
    width: 100%;
  }
}
</style>
