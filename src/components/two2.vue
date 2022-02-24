<template>
  <div class="box">
    <img src="../assets/2.jpg" class="backimg" alt="" srcset="" />
    <div class="close" @click="exit"></div>
    <div class="selectbox">
      <div class="line">
        <span
          >Select the path to the file with the BIOS of the graphics card</span
        >
      </div>
      <div class="line2">
        <el-input v-model="input" placeholder=""></el-input>
        <div class="dbtn dbtn2" @click="getFile">Browse</div>
      </div>
      <div class="line">
        <span>Select the folder to save this bios backup</span>
      </div>
      <div class="line4">
        <el-input v-model="input2" placeholder=""></el-input>
        <div class="dbtn dbtn1" @click="getPath">Browse</div>
      </div>
      <div class="dbtn dbtn3" @click="check">Start</div>
    </div>
  </div>
</template>
<script>
let shareObject = window.remote.getGlobal('shareObject')
const { app, dialog } = shareObject
export default {
  data() {
    return {
      cardType: 0,
      input: '',
      input2: ''
    }
  },
  methods: {
    exit() {
      app.quit()
    },
    check() {
      if (this.input && this.input2) {
        this.$router.push({ name: 'three2' })
      } else {
        const options = {
          type: 'warning',
          title: 'Waring',
          message: 'unselected BIOS or path'
          // buttons: ['确定', '取消']
        }
        dialog.showMessageBox(options)
      }
    },
    getFile() {
      dialog
        .showOpenDialog({
          properties: ['openFile'],
          filters: [
            { name: 'ROM', extensions: ['rom'] },
            { name: 'All Files', extensions: ['*'] }
          ]
        })
        .then((result) => {
          this.input = result.filePaths[0]
        })
    },
    getPath() {
      dialog
        .showOpenDialog({
          properties: ['openDirectory']
        })
        .then((result) => {
          this.input2 = result.filePaths[0]
        })
    }
  }
}
</script>
<style>
.box {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
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
.dbtn {
  background: #060;
  width: 220px;
  height: 36px;
  position: absolute;
  line-height: 36px;
  color: #fff;
  border-radius: 4px;
  -webkit-app-region: no-drag;
  cursor: pointer;
  text-align: center;
}
.dbtn1 {
  top: 5px;
  right: 59px;
}
.dbtn2 {
  top: 8px;
  right: 56px;
  width: 90px;
  height: 35px;
}
.dbtn3 {
  top: 355px;
  left: 265px;
}
.backimg {
  position: absolute;
  left: 0;
  top: 0;
}
.selectbox {
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 60px;
}
.line {
  text-align: left;
  padding: 5px 0;
  padding-left: 50px;
  height: 18px;
  line-height: 18px;
  -webkit-app-region: no-drag;
}
.line2 {
  text-align: left;
  padding: 5px 50px;
  position: relative;
  padding-bottom: 17px;
  padding-right: 172px;
}
.linetwo {
  text-align: left;
  padding: 5px 50px;
  padding-bottom: 18px;
}
.line3 {
  text-align: left;
  padding: 5px 50px;
  position: relative;
  padding-bottom: 17px;
  padding-right: 110px;
}
.line4 {
  text-align: left;
  padding: 5px 50px;
  position: relative;
  padding-bottom: 17px;
  padding-right: 332px;
}
.line4 .el-input {
  font-size: 16px;
}
.line3 .icon {
  position: absolute;
  font-size: 38px;
  right: 58px;
  top: 5px;
}
.icon.g {
  color: #03e306;
}
.icon.r {
  color: red;
}
.line span {
  color: #fff;
}
.el-select-dropdown__item {
  display: block;
  max-width: 655px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 400;
}
.el-select-dropdown__item.selected {
  color: #060;
}
</style>