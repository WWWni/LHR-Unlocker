<template>
  <div class="box">
    <img src="../assets/2.jpg" class="backimg" alt="" srcset="" />
    <div class="close" @click="exit"></div>
    <div class="inbox">
      <div class="left">
        <p>
          <i
            :style="{ visibility: step > 0 ? 'visible' : 'hidden' }"
            class="el-icon-success icon"
          ></i>
          Saving a backup
        </p>
        <p>
          <i
            :style="{ visibility: step > 1 ? 'visible' : 'hidden' }"
            class="el-icon-success icon"
          ></i>
          BIOS modification
        </p>
        <p>
          <i
            :style="{ visibility: step > 2 ? 'visible' : 'hidden' }"
            class="el-icon-success icon"
          ></i>
          Check file
        </p>
      </div>
      <div class="right">
        <img src="../assets/c1.jpg" class="cimg turn" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script>
let shareObject = window.remote.getGlobal('shareObject')
const { app } = shareObject
export default {
  data() {
    return {
      step: 0,
      timer: null
    }
  },
  mounted() {
    this.show()
  },
  methods: {
    exit() {
      app.quit()
    },
    show() {
      this.timer = setInterval(() => {
        if (this.step > 2) {
          clearInterval(this.timer)
          this.$router.push({ name: 'fine' })
        }
        this.step++
      }, 1500)
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

.backimg {
  position: absolute;
  left: 0;
  top: 0;
}
.inbox {
  display: flex;
  justify-content: space-around;
  height: 100%;
  position: relative;
}
.inbox .left {
  position: relative;
  height: 100%;
  width: 50%;
  padding-top: 126px;
  padding-left: 86px;
}
.left p,
.right p {
  text-align: left;
  color: #fff;
  font-size: 14px;
  line-height: 19px;
}
.left .icon {
  font-size: 18px;
  color: #03e306;
}
.inbox .right {
  position: relative;
  height: 100%;
  width: 50%;
}
.cimg {
  position: absolute;
  top: 150px;
  right: 130px;
}
.turn {
  animation: turn 5s linear infinite;
}
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>