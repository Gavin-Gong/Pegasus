<template>
  <div class="placeholder">
    <slot></slot>
    <h1 v-if="!$slots.default">{{ text }}</h1>
  </div>
</template>

<script>


export default {
  props: {
    text: {
      type: String,
      default: '',
    },
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
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  padding: 30px 0;
  * {
    color: #666;
  }
}
</style>
