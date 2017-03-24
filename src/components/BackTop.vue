<template>
  <div class="back-top"
    @click.prevent.stop="handleBackTop"
    v-if="toTop > 100">
    <i class="el-icon-arrow-up"></i>
  </div>
</template>

<script>
export default {
  props: {
  },
  created() {
    window.onscroll = () => {
      this.toTop = document.body.scrollTop;
    };
  },
  data() {
    return {
      toTop: document.body.scrollTop,
    };
  },
  methods: {
    handleBackTop() {
      document.body.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 20px;
  padding: 20px;
  line-height: 0;
  cursor: pointer;
  border-radius: 50%;
  background: #eee;
  box-shadow: #aaa 0px 2px 10px;
  i {
  }
}
</style>
