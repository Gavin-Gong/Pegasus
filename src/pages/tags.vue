<template>
  <div id="tags" class="matrix-layout" v-loading="isLoading">
    <top-nav></top-nav>
    <x-card
      v-for="(tag, index) in tagList"
      width="1000px"
      :key="index"
      :id="tag.id"
      :title="tag.title"
      :count="tag.post_count"
      :background="tag.banner"
      type="tag"
      route-name="Tag"
    ></x-card>
  </div>
</template>

<script>
  import XCard from './components/card';
  import TopNav from './components/top-nav';

  export default {
    components: {
      XCard,
      TopNav,
    },
    data() {
      return {
        isLoading: true,
      };
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch('fetchTagList').then(() => {
        this.isLoading = false;
      });
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
