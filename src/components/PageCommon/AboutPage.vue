<template>
  <div class="about">
    <h3>{{ title }}</h3>
    <p>{{des}}</p>
  </div>
</template>
<script>
export default {
  name: "AboutPage",
  data() {
    return {
      title: "This is About page",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non saepe reiciendis aspernatur hic molestiae debitis animi ex error illo, modi at aperiam ad, porro facilis. Cupiditate, voluptatibus. Molestiae, natus est.",
    };
  },
};
</script>

<style scoped>
h3 {
  color: blue;
}
</style>