<template>
  <div class="box">
    <div class="close" @click="exit"></div>
    <div class="tit">The task has been successfully completed</div>
    <div class="btn btn1" @click="next1">Next task</div>
    <div class="btn btn2" @click="exit">Exit</div>
    <img src="../assets/2.jpg" class="backimg" alt="" srcset="" />
  </div>
</template>
<script>
let shareObject = window.remote.getGlobal('shareObject')
const { app, dialog } = shareObject
export default {
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => {
      this.show()
    }, 300)
  },
  methods: {
    exit() {
      app.quit()
    },
    next1() {
      this.$router.push({ name: 'home' })
    },
    show() {
      const options = {
        type: 'info',
        title: '醒一醒',
        message: '梦里什么都有',
        buttons: ['再玩一会']
      }
      dialog.showMessageBox(options)
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
.tit {
  position: absolute;
  top: 130px;
  left: 176px;
  z-index: 2;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0.6px;
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
  top: 240px;
  left: 221px;
}
.btn2 {
  top: 310px;
  left: 221px;
}
</style>