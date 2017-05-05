<template>
  <div id="not-found">
    <div class="inner-box">
      <h1>你可能来到了无人区！</h1>
      <el-button
        type="primary"
        @click="$router.push({name: 'Home'})">回到首页</el-button>
    </div>
  </div>
</template>

<script>


export default {
  beforeCreate() {
    this.$store.commit('HIDDEN_NAV');
    this.$store.commit('HIDDEN_FOOTER');
  },
  beforeDestroy() {
    this.$store.commit('SHOW_NAV');
    this.$store.commit('SHOW_FOOTER');
  },
  deactivated() {
    this.$store.commit('SHOW_NAV');
    this.$store.commit('SHOW_FOOTER');
  },
  activated() {
    this.$store.commit('HIDDEN_NAV');
    this.$store.commit('HIDDEN_FOOTER');
  },
};
</script>

<style lang="scss" scoped>
  #not-found {
    box-sizing: border-box;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    width: 100vw;
    height: 100vh;
    background: url(~assets/images/article-banner.jpg) center center / cover fixed;
    .inner-box {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%);
      text-align: center;
      h1 {
        margin-bottom: 30px;
        color: #fff;
      }
    }
  }
</style>
