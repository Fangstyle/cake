<template>
  <div class="index-wraper">
    <!-- 顶部 -->
    <cHeader></cHeader>

    <div class="app-wraper">
      <!-- 主要内容 -->
      <div class="router-wraper">
        <router-view/>
      </div>
    </div>

    <cFooter></cFooter>

  </div>
</template>

<script>
import Header from "@/components/Common/Header"
import Footer from "@/components/Common/Footer"

export default {
  name: 'App',
  components: {
    cHeader: Header,
    cFooter: Footer
  }

}
</script>

<style>


</style>
