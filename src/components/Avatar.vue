<template>
  <span :title="user.username">{{slug}}</span> 
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'hunger' 
      },
      slug: 'H'
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #f2b81c;
  text-align: center;
  line-height: 32px;
  margin-top: 15px;
  text-shadow: 1px 0 1px #795c19;
  border-radius: 50%;
  text-transform: uppercase;
}

</style>