<template>
  <div id="app">
    <sidebar />
    <router-view />
  </div>
</template>

<script>
import sidebar from "@/components/Sidebar.vue";

export default {
  components: { sidebar },
  name: "App",
};
</script>

<style>
@import '//at.alicdn.com/t/font_496303_kqrjhri8l25d0a4i.css';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}

body {
  font-size: 14px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #eee;
}

a {
  text-decoration: none;
  color: #444;
}

ul, li {
  list-style: none;
}

#app {
  display: flex;
  align-items: stretch;
}
</style>
