<template>
  <div id="dashboard">
    gggggggggg
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    created() {
      this.$store.commit('HIDDEN_NAV');
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';

</style>
