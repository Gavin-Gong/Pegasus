<template>
  <div id="tags" class="matrix-layout">
    <x-card
      v-for="(tag, index) in tagList"
      :key="index"
      :id="tag.id"
      :title="tag.title"
      :count="tag.post_count"
      route-name="Tag"
    ></x-card>
  </div>
</template>

<script>
  import XCard from './components/card';

  export default {
    components: {
      XCard,
    },
    data() {
      return {

      };
    },
    created() {
      this.$store.dispatch('fetchTagList');
    },
    // activated() {
    //   this.$store.dispatch('fetchTagList');
    // },
    methods: {
      fetchTags() {

      },
    },
    computed: {
      tagList() {
        return this.$store.state.tag.list;
      },
    },
  };
</script>

<style lang="scss" scoped>
#tags {
  // margin-left: -20px;
}
</style>
