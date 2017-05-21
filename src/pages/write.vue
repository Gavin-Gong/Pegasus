<template>
  <div id="write">
    <div class="op-bar">
      <el-button @click="goBack">
        <x-icon type="arrow-left"></x-icon> 返回
      </el-button>
      <el-button type="primary" @click="showDialog = true"> 保存 </el-button>
    </div>
    <div id="editor-wrapper" class="typo">
      <textarea id="md-editor">
      </textarea>
    </div>
    <el-dialog v-model="showDialog" :show-close="false" title="Addtional Infomation">
      <el-form label-position="right" label-width="80px">
        <el-form-item label="title">
          <el-input placeholder="请输入标题" v-model="postFields.title"></el-input>
        </el-form-item>
        <el-form-item label="标签">
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
        <el-form-item label="专题">
          <el-select
            class="long-select"
            filterable
            v-model="postFields.topic">
            <el-option
              v-for="(item, key) in topicList"
              :key="key"
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

      this.$store.commit('HIDDEN_FOOTER');
    },
    beforeDestroy() {
      this.$store.commit('SHOW_FOOTER');
    },
    deactivated() {
      this.$store.commit('SHOW_FOOTER');
    },
    activated() {
      this.$store.commit('HIDDEN_FOOTER');
    },
    mounted() {
       /* eslint-disable */
      simplemde = new SimpleMDE({
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
        autoDownloadFontAwesome: false,
      });
    },
    data() {
      return {
        showDialog: false,
        postFields: {
          title: '',
          topic: {},
          tags: [],
          body: '',
        },
        List: [
          { title: 'gg', id: 1 },
          { title: 'gg', id: 2 },
          { title: 'gg', id: 3 },
        ],
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
  #editor-wrapper {
    h1,h2,h3,h4,h5,h6 {
      margin-top: 0;
    }
  }
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
