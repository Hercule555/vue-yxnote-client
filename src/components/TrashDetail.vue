<template>
  <div id="trash-detail">
    <h1>{{msg}}: {{$route.query.noteId}}</h1>
  </div>
</template>

<script>
import Auth from "@/apis/auth"

export default {

  data() {
    return {
      msg: '回收站详情页'
    }
  },
  created() {
    Auth.get_info()
     .then(res => {
       if(!res.isLogin) {
         this.$router.push({path: 'login'})
       }
     })
  }
}
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>