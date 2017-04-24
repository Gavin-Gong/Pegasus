<template>
  <div id="editor">
    <textarea id="md-editor">
    </textarea>
  </div>
</template>

<script>
  /* eslint-disable */
  import MDE from 'simplemde';
  import marked from 'marked';
  import 'simplemde/dist/simplemde.min.css';

  let simplemde;

  export default {
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

  // override Element select component styles
  .long-select {
    width: 100%;
  }
}
.el-message {
  border-radius: 20px!important;
}
</style>
