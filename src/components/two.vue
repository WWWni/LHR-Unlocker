<template>
  <div class="box">
    <img src="../assets/2.jpg" class="backimg" alt="" srcset="" />
    <div class="close" @click="exit"></div>
    <div class="selectbox">
      <div class="line">
        <span>Select the GPU you want to modify</span>
      </div>
      <div class="linetwo">
        <el-select
          :popper-append-to-body="false"
          v-model="value"
          placeholder=""
          @change="select"
        >
          <el-option
            v-for="item in gpulist"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="line">
        <span>Select a task to be performed</span>
      </div>
      <div class="line3">
        <el-select
          :popper-append-to-body="false"
          v-model="value2"
          placeholder=""
          @change="select"
        >
          <el-option
            v-for="item in perlist"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <i v-if="cardType == 1" class="el-icon-success icon g"></i>
        <i v-if="cardType == 2" class="el-icon-error icon r"></i>
      </div>
      <div class="line">
        <span>Select the folder to save this bios backup</span>
      </div>
      <div class="line4">
        <el-input v-model="input" placeholder=""></el-input>
        <div class="dbtn dbtn1" @click="getPath">Browse</div>
      </div>
    </div>
    <div class="dbtn dbtn2" @click="check">Start</div>
  </div>
</template>
<script>
let shareObject = window.remote.getGlobal('shareObject')
const { app, exec, dialog } = shareObject
export default {
  data() {
    return {
      gpulist: [],
      perlist: [
        {
          value:
            'LHR v2 Unlock (RTX 30XX) - To remove LHR v2 lock from the graphics card'
        }
      ],
      cardType: 0,
      input: '',
      value: '',
      value2: ''
    }
  },
  mounted() {
    this.show()
  },
  methods: {
    exit() {
      app.quit()
    },
    select() {
      if (!this.value) return
      if (!this.value2) return
      if (this.value.indexOf('RTX') == -1) {
        this.cardType = 2
      } else {
        this.cardType = 1
      }
    },
    check() {
      if (this.cardType == 1 && this.input) {
        this.$router.push({ name: 'three' })
      } else if (this.cardType == 2) {
        const options = {
          type: 'warning',
          title: 'Waring',
          message: 'unsupported GPU'
          // buttons: ['确定', '取消']
        }
        dialog.showMessageBox(options)
      } else {
        const options = {
          type: 'warning',
          title: 'Waring',
          message: 'unselected task or path'
          // buttons: ['确定', '取消']
        }
        dialog.showMessageBox(options)
      }
    },
    getPath() {
      dialog
        .showOpenDialog({
          properties: ['openDirectory']
        })
        .then((result) => {
          this.input = result.filePaths[0]
        })
    },
    show() {
      var that = this
      String.prototype.splice = function (start, newStr) {
        return this.slice(0, start) + newStr + this.slice(start)
      }
      let command = exec(
        'wmic path win32_VideoController get pnpdeviceid,name,AdapterRAM',
        function (err, stdout, stderr) {
          let temp = stdout.split('\n')
          let arr = []
          temp.forEach((v) => {
            if (v.indexOf('PCI') != -1) {
              arr.push(v)
            }
          })
          arr.forEach((v, i) => {
            let t = v.split('  ')
            t.splice(t.indexOf('\r\r'), 1)
            t[0] = (Number(t[0]) / 1024 / 1024).toFixed(0) + 'MB'
            t[0] = t.splice(1, 1, t[0])[0]
            that.gpulist.push({
              value: 'GPU ' + i + ': ' + t.join(' ')
            })
          })
          that.value = that.gpulist[0].value
          if (err || stderr) {
            console.log('start failed' + err + stderr)
          }
        }
      )
      command.stdin.end()
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