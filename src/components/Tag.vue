<template>
  <router-link
    tag="div" class="component-tag" :to="route">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: [Object, String],
      default: '/',
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.component-tag {
  display: inline-block;
  padding: 1px 6px;
  margin-left: 3px;
  border-radius: 5px;
  cursor: pointer;
  background: #ccc;
  color: #666;
  font-size: 12px;
}
</style>
