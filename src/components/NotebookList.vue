<template>
  <div id="notebook-list">
    <header>
      <a href="#" class="btn" @click.prevent="onCreate"
        ><i class="iconfont icon-plus"></i>新建笔记本</a
      >
    </header>
    <main>
      <h3 class="layout">笔记本列表({{ notebooks.length }})</h3>
      <div class="book-list">
        <router-link
          v-for="notebook in notebooks"
          :key="notebook.id"
          to="/note/1"
          class="notebook"
        >
          <div>
            <span class="iconfont icon-notebook"></span>{{ notebook.title }}
            <span>{{ notebook.counts }}</span>
            <span class="action" @click.stop.prevent="onEdit(notebook)">编辑</span>
            <span class="action" @click.stop.prevent="onDelete(notebook)">删除</span>
            <span class="date">{{notebook.friendlyCreatedAt}}</span>
          </div>
        </router-link>
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
import Notebooks from "@/apis/notebooks";
import {friendlyDate} from '@/helpers/date-util'

// window.Notebooks = Notebooks

export default {
  data() {
    return {
      notebooks: [],
    };
  },
  methods: {
    onCreate() {
      let title = window.prompt("创建笔记本页");
      if (title.trim() === "") {
        alert("笔记本名不能为空");
        return;
      }
      Notebooks.addNotebook({ title }).then((res) => {
        console.log(res);
        res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt)
        this.notebooks.unshift(res.data)
         alert(res.msg)
      });
    },
    onEdit(notebook) {
      console.log('edit', notebook)
      let title = window.prompt('修改标题', notebook.title)
      Notebooks.updateNotebook(notebook.id, {title})
       .then(res => {
         console.log(res)
         notebook.title = title
         alert(res.msg)
       })
    },
    onDelete(notebook) {
      let isConfirm = window.confirm('确定删除吗？')
      if(isConfirm) {
        Notebooks.deleteNotebook(notebook.id)
         .then(res => {
           console.log(res)
           this.notebooks.splice(this.notebooks.indexOf(notebook),1)
           alert(res.msg)
         })
      }
    },
  },
  created() {
    Auth.get_info().then((res) => {
      if (!res.isLogin) {
        this.$router.push({ path: "login" });
      }
    });
    Notebooks.getAll().then((res) => {
      this.notebooks = res.data;
    });
  },
};
</script>

<style lang="less" scoped>
@import url(../assets/css/notebook-list);
</style>
