<template>
  <div id="app">
    <header></header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
header {
  position: absolute;
  height: 50px;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-app-region: drag;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.el-select .el-input.is-focus .el-input__inner,
.el-select .el-input__inner:focus,
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #fff !important;
  color: #000;
}
.el-input__inner {
  color: #000 !important;
  font-size: 16px !important;
  padding-left: 10px !important;
}
.el-select {
  display: block !important;
}
</style>
