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

<style lang="scss" scoped>
  .form-container{
    text-align: left;
    margin-left: 25%;
    margin-right: 25%;

    label{
      margin-left:25%;
      width:20%;
      float:left;
    }

    input{
      width:30%;
      float:left;
    }

  }

</style>
