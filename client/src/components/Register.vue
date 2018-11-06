<template>
  <div class="Register">
    <p>REGISTER</p>
    <div class="form-container">
      <label for="email">EMAIL:</label>
      <input id="email" type="email"/>
      <br>
      <label for="password">PASSWORD:</label>
      <input id="password" type="password" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'HAHHA'
    }
  }
}
</script>

<style lang="css" scoped>
  .form-container{
    text-align: left;
    margin-left: 25%;
    margin-right: 25%;
  }
  .form-container label{
      margin-left:25%;
      width:20%;
      float:left;
  }

  .form-container input{
      width:30%;
      float:left;
  }

</style>
