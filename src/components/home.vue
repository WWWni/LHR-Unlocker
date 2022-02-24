<template>
  <div class="box">
    <div class="close" @click="exit"></div>
    <div class="btn btn1" @click="next1">
      Read,modify and write BIOS from GPU
    </div>
    <div class="btn btn2" @click="next2">Modifying the BIOS file</div>
    <img src="../assets/1.jpg" class="backimg" alt="" srcset="" />
  </div>
</template>
<script>
let shareObject = window.remote.getGlobal('shareObject')
const { app } = shareObject
export default {
  data() {
    return {}
  },
  methods: {
    exit() {
      app.quit()
    },
    next1() {
      this.$router.push({ name: 'two' })
    },
    next2() {
      this.$router.push({ name: 'two2' })
    }
  }
}
</script>
<style>
.box {
  position: relative;
}
.close {
  -webkit-app-region: no-drag;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 26px;
  top: 14px;
  cursor: pointer;
  z-index: 1;
}
.btn {
  background: #060;
  width: 304px;
  height: 35px;
  position: absolute;
  line-height: 36px;
  color: #fff;
  border-radius: 4px;
  -webkit-app-region: no-drag;
  cursor: pointer;
  z-index: 2;
}
.backimg {
  position: absolute;
  left: 0;
  top: 0;
}
.btn1 {
  top: 275px;
  left: 225px;
}
.btn2 {
  top: 345px;
  left: 225px;
}
</style>