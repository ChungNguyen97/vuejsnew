<template>
  <div class="register">
    <h3>Đăng ký tài khoản</h3>
    <form action="" method="post">
      <div class="formGroup">
        <label for="">Fullname: </label>
        <input type="text" name="fullname" id="fullname" />
      </div>
      <div class="formGroup">
        <label for="">Username: </label>
        <input type="text" name="username" id="username" />
      </div>
      <div class="formGroup">
        <label for="">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div class="formGroup">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
export default {
  name:'RegisterUser',
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>