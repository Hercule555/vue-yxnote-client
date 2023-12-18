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
          :to="`/note?notebookId=${notebook.id}`"
          class="notebook"
        >
          <div>
            <span class="iconfont icon-notebook"></span>{{ notebook.title }}
            <span>{{ notebook.noteCounts }}</span>
            <span class="action" @click.stop.prevent="onEdit(notebook)"
              >编辑</span
            >
            <span class="action" @click.stop.prevent="onDelete(notebook)"
              >删除</span
            >
            <span class="date">{{ notebook.friendlyCreatedAt }}</span>
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
import { friendlyDate } from "@/helpers/date-util";

// window.Notebooks = Notebooks

export default {
  data() {
    return {
      notebooks: [],
    };
  },
  methods: {
    onCreate() {
      this.$prompt("请输入标题", "创建笔记本页面", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{1,35}$/,
        inputErrorMessage: "笔记本标题不能为空,且不超过30个字符",
      })
        .then(({ value }) => {
          return Notebooks.addNotebook({ title: value });
        })
        .then((res) => {
          res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt);
          this.notebooks.unshift(res.data);
          this.$message.success(res.msg)
          
        })

    },
    onEdit(notebook) {
      let title = "";
      this.$prompt("请输入新标题", "修改笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{1,30}$/,
        inputValue: notebook.title,
        inputErrorMessage: "笔记本标题不能为空,且不超过30个字符",
      })
        .then(({ value }) => {
          title = value;
          return Notebooks.updateNotebook(notebook.id, { title: value });
        })
        .then((res) => {
          notebook.title = title;
          this.$message.success(res.msg)
          
        })
        
    },
    onDelete(notebook) {
      this.$confirm("此操作将永久删除该笔记, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return Notebooks.deleteNotebook(notebook.id)
        })
        .then((res) => {
          this.notebooks.splice(this.notebooks.indexOf(notebook), 1);
          this.$message.success(res.msg)
        })
        
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
