<template>
  <div id="dashboard-profile">
    <el-row>
      <el-col :md="{span: 14, offset: 5}">
        <el-card class="profile-form">
          <el-form label-width="80px" label-position="right">
            <el-form-item label="名字">
              <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="头像链接">
              <el-input v-model="profile.avatar"></el-input>
            </el-form-item>
            <el-form-item label="职业">
              <el-input v-model="profile.job"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="profile.email"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="profile.address"></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input type="textarea" v-model="profile.intro" :autosize="{minRows: 5, maxRows: 10}"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveProfile">保存</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { Card, FormItem, Form, Input, Col, Row, Button } from 'element-ui';
  import { putProfile } from 'api/profile';
  // import Vue from 'vue';

  Vue.use(Card);
  Vue.use(FormItem);
  Vue.use(Form);
  Vue.use(Input);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Button);


  export default {
    beforeCreate() {
      this.$store.dispatch('fetchProfile');
    },
    components: {
      // MdEditor,
    },
    methods: {
      saveProfile() {
        putProfile(this.profile).then(() => {
          this.$msg.success('修改成功');
          this.$store.dispatch('fetchProfile').then((data) => {
            this.profile = data;
          });
        });
      },
    },
    computed: {
      // ...Vuex.mapState({
      //   profile: state => state.profile.data,
      // }),
      profile() {
        return JSON.parse(JSON.stringify(this.$store.state.profile.data));
      },
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
.profile-form {
  margin-top: 40px;
}
</style>
