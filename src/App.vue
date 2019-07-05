<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Storage from './utils/localStorage'

export default {
  name: 'App',
  data () {
    return {}
  },
  created () {
    // 检测浏览器版本
    if (!window.localStorage || !window.sessionStorage) {
      this.$notify({
        title: '警告',
        message: '浏览器版本过低，请升级浏览器！',
        type: 'warning'
      })
    }
  }

}
</script>

<style>
@import "../static/style/common.css";

</style>
