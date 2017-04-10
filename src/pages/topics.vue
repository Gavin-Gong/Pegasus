<template>
  <div id="topics" class="matrix-layout">
    <x-card
      v-for="topic in topicList"
      :id="topic.id"
      :title="topic.title"
      :count="topic.post_count"
      :background="topic.banner"
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
      this.$store.dispatch('fetchTopicList');
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
#tags {
  margin-left: -20px;
}
</style>
