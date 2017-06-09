<template>
  <div id="demo">

  </div>
</template>

<script>
  import { Card, Form, FormItem, Input, Button } from 'element-ui';
  import wilddog from 'wilddog';

  const config = {
    syncURL: 'https://pegasus.wilddogio.com',
  };
  wilddog.initializeApp(config);
  const ref = wilddog.sync().ref();
  ref.set({
    profile: {
      name: 'Gavinss',
    },
  }, (err) => {
    if (err === null) {
      console.log('set success');
    }
  });


  Vue.use(Card);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Input);
  Vue.use(Button);

  export default {
    methods: {

    },
    data() {
      return {

      };
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
</style>
