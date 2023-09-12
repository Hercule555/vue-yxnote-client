<template>
  <div class="fi">纳米好{{ msg }}</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "this is login page",
    };
  },
};
</script>

<style scoped>
.fi {
  color: red;
  font-size: 60px;
}
</style>
