<template>
  <i :class="classList" :style="colorStyle" aria-hidden="true" ></i>
</template>

<script>
export default {
  props: {
    size: {
      default: '1x',
    },
    type: {

    },
    color: {
      type: String,
      default: 'inherit',
    },
    fix: {

    },
  },
  data() {
    return {
      classList: [
        'fa',
        `fa-${this.type}`,
        `fa-${this.size}`,
      ],
      colorStyle: {
        color: this.color,
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
