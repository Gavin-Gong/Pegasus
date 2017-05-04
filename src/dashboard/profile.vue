<template>
  <div id="dashboard-profile">
    <!--<md-editor></md-editor>-->
    <el-card>
      Hello World
    </el-card>
  </div>
</template>

<script>
  // import MdEditor from 'components/Editor';
  import { Card } from 'element-ui';

  Vue.use(Card);
  export default {
    components: {
      // MdEditor,
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
</style>
