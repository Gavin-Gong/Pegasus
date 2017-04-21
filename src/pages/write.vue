<template>
  <div id="editor">
    <textarea id="md-editor">

    </textarea>
    <div class="post-bar"> bddar</div>
  </div>
</template>

<script>
  /* eslint-disable */
  import MDE from 'simplemde';
  import 'simplemde/dist/simplemde.min.css';

  export default {
    mounted() {
      const simplemde = new MDE({
        element: document.getElementById("md-editor"),
        spellChecker: false,
        placeholder: "Type here...",
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true,
        },
        // hideIcons: ['fullscreen'],
      });
      simplemde.value("This text will appear in the editor");
    },
  };
</script>

<style lang="scss">
// #editor {
//   z-index: 10000;
// // }
// .CodeMirror {
// 	height: 600px;
// }
.post-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 10000000;
  background: #000;
}
</style>
