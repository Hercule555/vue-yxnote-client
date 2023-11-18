<template>
  <span :title="username">{{ slug }}</span>
</template>

<script>
import { computed } from 'vue'
import Auth from '@/apis/auth'
import Bus from '@/helpers/bus'

export default {
  data() {
    return {
      username: '未',
    }
  },
  created(){
    Bus.$on('userInfo', user => {
      this.username = user.username
    })

    Auth.get_info()
     .then(res => {
       if(res.isLogin) {
         this.username = res.data.username
       }
     })
  },
  computed: {
    slug() {
      return this.username[0]
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