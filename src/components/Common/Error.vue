<style>
  .error-wraper {
    width: 100%;
    height: 100%;
  }
  .error-wrap {
    width: 142px;
    height: 142px;
    background: url('../../../static/error.png') center center no-repeat;
    background-size: 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-top: -71px;
    margin-left: -71px;
  }
  .error-tip {
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #B1B1B1;
    line-height: 26px;
    position: absolute;
    bottom: -30px;
    left: 0;
    box-sizing:border-box;
  }
</style>

<template>
  <div class="error-wraper">
    <div class="error-wrap">
      <div class="error-tip">
        请使用正确路径
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
