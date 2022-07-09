<template>
  <div v-if="!mFlag">
    <!-- 桌面端 -->
    <LiveStreaming />
  </div>

  <div v-else>
    <!-- 移动端 -->
    <LiveStreamingM />
  </div>

</template>

<script>
import LiveStreaming from './components/livestreaming/LiveStreaming'
import LiveStreamingM from './components/livestreaming/LiveStreamingM'

export default {
  name: 'App',
  components: {
    LiveStreaming,
    LiveStreamingM
  },
  data: function () {
    return {
      mFlag: true
    }
  },
  created(){
    this.mFlag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  },
}
</script>

<style type="less" scoped>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  background: #eee;
  /* padding: 10px 10px; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
