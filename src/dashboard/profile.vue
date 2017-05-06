<template>
  <div id="dashboard-profile">
    <el-row>
      <el-col :md="{span: 14, offset: 5}">
        <el-card class="profile-form">
          <el-form label-width="80px" label-position="left">
            <el-form-item label="名字">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="头像链接">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="职业">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input type="textarea" rows="5"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { Card, FormItem, Form, Input, Col, Row, Button } from 'element-ui';

  Vue.use(Card);
  Vue.use(FormItem);
  Vue.use(Form);
  Vue.use(Input);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Button);

  export default {
    components: {
      // MdEditor,
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
.profile-form {
  margin-top: 40px;
}
</style>
