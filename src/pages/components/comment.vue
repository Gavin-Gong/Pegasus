<template>
<el-card>
  <div id="disqus_thread">
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </div>
</el-card>
</template>

<script>
  import { Card } from 'element-ui';

  Vue.use(Card);

  export default {
    created() {
      /* eslint-disable */
      var disqus_config = function () {
        this.page.url = this.$route.params.id;
        this.page.identifier = this.$route.params.id;
      };
      (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://pegasus-app.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    },
  };
</script>

<style lang="scss">

</style>
