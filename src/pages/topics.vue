<template>
  <div id="topics" class="matrix-layout" v-loading.fullscreen="isLoading">
    <x-card
      v-for="(topic, index) in topicList"
      :key="index"
      :id="topic.id"
      route-name="Topic"
      :title="topic.title"
      :count="topic.post_count"
      :background="topic.banner"
      type="topic"
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
        isLoading: false,
      };
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch('fetchTopicList').then(() => {
        this.isLoading = false;
      });
    },
    methods: {
      fetchTags() {

      },
    },
    computed: {
      topicList() {
        return this.$store.state.topic.list;
      },
    },
  };
</script>

<style lang="scss" scoped>
#topics {
  // margin-top: 120px;
}
</style>
