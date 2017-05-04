<template>
  <div class="md-editor">
    <textarea id="md-editor">
    </textarea>
  </div>
</template>

<script>
  /* eslint-disable */
  // import MDE from 'simplemde';
  // import marked from 'marked';
  import 'simplemde/dist/simplemde.min.css';

  let MDE;

  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    mounted() {
       /* global simpleMDE */
      MDE = new SimpleMDE({
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
      MDE.value(this.value);
    },
    watch: {
      value() {
        MDE.value(this.value);
      },
    },
  };
</script>

<style lang="scss">
.md-editor{
  z-index: 10000;
   height: 100vh;
   overflow: auto;
  .CodeMirror, .CodeMirror-scroll {
    // height: calc(100% - 100px);
    // overflow: scroll;
    // min-height: 500px;

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

  // override Element select component styles
  .long-select {
    width: 100%;
  }
}
.el-message {
  border-radius: 20px!important;
}
</style>
