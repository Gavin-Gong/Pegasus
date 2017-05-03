<template>
  <div id="write">
    <div class="op-bar">
      <el-button @click="goBack">
        <x-icon type="arrow-left"></x-icon> 返回
      </el-button>
      <el-button type="primary" @click="showDialog = true"> 保存 </el-button>
    </div>
    <div id="editor-wrapper">
      <textarea id="md-editor">
      </textarea>
    </div>
    <el-dialog v-model="showDialog" :show-close="false" title="Addtional Infomation">
      <el-form label-position="right" label-width="80px">
        <el-form-item label="title">
          <el-input placeholder="请输入标题" v-model="postFields.title"></el-input>
        </el-form-item>
        <el-form-item label="tag">
          <el-select
            class="long-select"
            v-model="postFields.tags"
            filterable
            multiple
            placeholder="请选择标签">
            <el-option
              v-for="(item, key) in tagList"
              :key="key"
              :label="item.title"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="topic">
          <el-select
            class="long-select"
            v-model="postFields.topics"
            filterable
            clearable
            placeholder="请选择专题">
            <el-option
              v-for="(item, index) in topicList"
              :key="index"
              :label="item.title"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button @click="showDialog = false"> 取消 </el-button>
        <el-button type="primary" @click="postArticle"> 发布 </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  /* eslint-disable */
  /* global marked*/
  import XIcon from 'components/Icon';
  import { Button, Input, Dialog, Form, FormItem, Option, Select } from 'element-ui';
  import 'simplemde/dist/simplemde.min.css';

  let simplemde;

  Vue.use(Button);
  Vue.use(Input);
  Vue.use(Dialog);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Option);
  Vue.use(Select);
  export default {
    components: {
      XIcon
    },
    beforeCreate() {
      this.$store.dispatch('fetchTopicList');
      this.$store.dispatch('fetchTagList');

      this.$store.commit('HIDDEN_NAV');
      this.$store.commit('HIDDEN_FOOTER');
    },
    beforeDestroy() {
      this.$store.commit('SHOW_NAV');
      this.$store.commit('SHOW_FOOTER');
    },
    deactivated() {
      this.$store.commit('SHOW_NAV');
      this.$store.commit('SHOW_FOOTER');
    },
    activated() {
      this.$store.commit('HIDDEN_NAV');
      this.$store.commit('HIDDEN_FOOTER');
    },
    mounted() {
       /* eslint-disable */
      simplemde = new window.simpleMDE({
        element: document.getElementById("md-editor"),
        spellChecker: false,
        placeholder: '开始你的写作.....',
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
    },
    data() {
      return {
        showDialog: false,
        postFields: {
          title: '',
          topics: [],
          tags: [],
          body: '',
        },
      };
    },
    methods: {
      postArticle() {
        this.postFields.body = simplemde.value();
        this.$store.dispatch('postArticle', this.postFields).then(({ data }) => {
          this.$msg.success({
            message: '发布成功',
            duration: 1000,
          });
          this.showDialog = false;
          this.$router.push({name: 'Article', params: {id: data.id}});
        });
        this.showDialog = false;
      },
      goBack() {
        history.back();
      },
    },
    computed: {
      topicList() {
        return this.$store.state.topic.list;
      },
      tagList() {
        return this.$store.state.tag.list;
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

  // override Element select component styles
  .long-select {
    width: 100%;
  }
}
.el-message {
  border-radius: 20px!important;
}
</style>
