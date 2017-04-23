<template>
  <div id="write">
    <div class="op-bar">
      <el-input class="dp-ib" placeholder="type your title" style="width: 300px; margin-right: 40px; font-weight: bold"></el-input>
      <el-button @click="goBack">
        <x-icon type="arrow-left"></x-icon> Back
        <!--<i class="el-icon-arrow-left"></i>-->
      </el-button>
      <el-button type="primary" @click="postArticle"> Save </el-button>
      <!--save & post-->
      <!--discard-->
      <!--save to draft-->
    </div>
    <div id="editor-wrapper">
      <textarea id="md-editor">
      </textarea>
    </div>
    <el-dialog v-model="showDialog" :show-close="false" title="Addtional Infomation">
      <el-form>
        <el-form-item>
          <el-input placeholder="type your title"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="type your topic"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="type your tag"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="uploader your tag"></el-input>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button @click="showDialog = false"> Cancel </el-button>
        <el-button type="primary"> Make sure and post </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  /* eslint-disable */
  import MDE from 'simplemde';
  import marked from 'marked';
  import XIcon from 'components/Icon';
  import { Button, Input, Dialog, Form, FormItem } from 'element-ui';
  import 'simplemde/dist/simplemde.min.css';

  let simplemde;

  Vue.use(Button);
  Vue.use(Input);
  Vue.use(Dialog);
  Vue.use(Form);
  Vue.use(FormItem);
  export default {
    components: {
      XIcon
    },
    created() {
      this.$store.commit('HIDDEN_NAV');
      this.$store.commit('HIDDEN_FOOTER');
    },
    beforeDestroy() {
      this.$store.commit('SHOW_NAV');
      this.$store.commit('SHOW_FOOTER');
    },
    mounted() {
       /* eslint-disable */
      simplemde = new MDE({
        element: document.getElementById("md-editor"),
        spellChecker: false,
        placeholder: 'Type here...',
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true,
        },
        previewRender(plainText) {
          return marked(plainText);
        },
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true,
        },
        // toolbar: [
        //   {
        //     name: "bold",
        //     action: MDE.toggleBold,
        //     className: "fa fa-bold",
        //     title: "Bold",
        //   },
        //   {
        //     name: "quote",
        //     action: MDE.toggleBlockquote,
        //     className: "fa fa-quote-left",
        //     title: "Quote",
        //   },
        //   {
        //     name: "preview",
        //     action: MDE.togglePreview,
        //     className: "fa fa-eye no-disable",
        //     title: "Preview",
        //   },
        //   {
        //     name: "side",
        //     action: MDE.toggleSideBySide,
        //     className: "fa fa-columns no-disable no-mobile",
        //     title: "Side",
        //   },
        //   {
        //     name: "Tag",
        //     action (editor){
        //       // Add your own code
        //     },
        //     className: "fa fa-star tag-btn",
        //     title: "Custom Button",
        //   },
        //   {
        //     name: "Topic",
        //     action (editor){
        //       // Add your own code
        //     },
        //     className: "fa fa-star ",
        //     title: "Custom Button",
        //   },
        //   {
        //     name: "Save",
        //     action (editor){
        //       // Add your own code
        //     },
        //     className: "fa fa-star",
        //     title: "Custom Button",
        //   },
        // ],
        // hideIcons: ['fullscreen'],
        autoDownloadFontAwesome: false,
      });
    },
    data() {
      return {
        showDialog: true,
      };
    },
    methods: {
      postArticle() {
        this.$store.dispatch('postArticle', {
          body: simplemde.value(),
        });
        this.showDialog = true;
      },
      goBack() {
        history.back();
      },
    },
  };
</script>

<style lang="scss">
#write {
  z-index: 10000;
  margin-top: -100px;
  .CodeMirror, .CodeMirror-scroll {
    min-height: calc(100% - 100px);
    min-height: 500px;
  }
  .tag-btn {
    margin-left: 100px;
  }
  .op-bar {
    z-index: 100;
    position: fixed;
    right: 100px;
    top: 8px;
  }
  .post-bar {
    // position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 10000000;
    background: #000;
  }
}
</style>
