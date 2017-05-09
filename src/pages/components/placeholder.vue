<template>
  <div class="placeholder">
    <slot></slot>
      <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
    <h1 v-if="!$slots.default">
    </h1>
  </div>
</template>

<script>


export default {
  props: {
    // text: {
    //   type: String,
    //   default: '',
    // },
    height: {
      type: String,
      default: '100px',
    },
  },
  data() {
    return {
      style: {
        height: this.height,
      },
    };
  },
};
</script>

<style lang="scss">
.placeholder {
  width: 100%;
  height: 600px;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  padding: 30px 0;
  * {
    color: #666;
  }
}
</style>
