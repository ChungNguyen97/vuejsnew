<template>
  <div class="register">
    <h3>Đăng nhập</h3>
    <form action="" method="post">
      <div class="formGroup">
        <label for="">Username: </label>
        <input type="text" name="username" id="username" />
      </div>
      <div class="formGroup">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>