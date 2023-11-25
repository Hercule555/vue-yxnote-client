<template>
  <div id="notebook-list">
    <header>
      <a href="#" class="btn"><i class="iconfont icon-plus"></i>新建笔记本</a>
    </header>
    <main>
      <h3 class="layout">笔记本列表(10)</h3>
      <div class="book-list">
        <a href="#" class="notebook">
          <div>
            <span class="iconfont icon-notebook"></span>笔记本标题1
            <span>3</span> <span class="action">编辑</span>
            <span class="action">删除</span>
            <span class="date">3天前</span>
          </div>
        </a>

        <a href="#" class="notebook">
          <div>
            <span class="iconfont icon-notebook"></span>笔记本标题2
            <span>1</span> <span class="action">编辑</span>
            <span class="action">删除</span>
            <span class="date">5天前</span>
          </div>
        </a>
      </div>
    </main>
    <!-- <ul>
      <li>
        <router-link to="/note/1">笔记本1</router-link>
      </li>
      <li>
        <router-link to="/note/2">笔记本2</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import Auth from "@/apis/auth";

export default {
  data() {
    return {
      msg: "笔记本列表",
    };
  },
  created() {
    Auth.get_info().then((res) => {
      if (!res.isLogin) {
        this.$router.push({ path: "login" });
      }
    });
  },
};
</script>

<style lang="less" scoped>

@import url(../assets/css/notebook-list);

</style>
