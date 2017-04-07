<template>
  <div id="tags">
    <x-tag
      v-for="tag in tagList"
      :id="tag.id"
      :title="tag.title"
      :count="tag.posts_count"
      :background="tag.banner"
    ></x-tag>
  </div>
</template>

<script>
  import XTag from './components/tag';

  export default {
    components: {
      XTag,
    },
    data() {
      return {

      };
    },
    created() {
      this.$store.dispatch('fetchTagList');
    },
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
  margin-left: -20px;
}
</style>
