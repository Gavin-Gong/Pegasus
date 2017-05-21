<template>
  <div id="profile" ref="wrapper">
    <div class="affix-wrapper" :style="isAffix ? affixStyle : {}">
      <el-card class="profile-data">
        <div class="avatar-wrapper">
          <img :src="profile.avatar" alt="" class="avatar">
        </div>
        <h2 class="name">{{ profile.name }}</h2>
        <p class="bio">{{ profile.job }}</p>
        <p class="address"><x-icon type="map-marker" color="#333"></x-icon> {{ profile.address }} </p>
        <!--<el-button @click="handleFollow" class="mt-s" type="primary"> 关注我 </el-button>
        <a href="mailto:kefengong@outlook.com" target="_blank">联系我</a>-->
        <ul class="data">
          <li>
            <h3>{{ profile.post_count }}</h3>
            <p>文章</p>
          </li>
          <li>
            <h3>{{ profile.streak_day_count }}</h3>
            <p>天</p>
          </li>
        </ul>
        <ul class="social-list">
          <li v-for="item in profile.socials">
            <a :href="item.url" target="_blank">
              <i :class="['iconfont', `icon-${item.type}`]"></i>
            </a>
          </li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
import { Card, Button, MessageBox } from 'element-ui';
import XIcon from 'components/Icon';

Vue.use(Card);
Vue.use(Button);

export default {
  components: {
    XIcon,
  },
  data() {
    return {
      affixStyle: {
        position: 'fixed',
        // width: getComputedStyle(document.querySelector('#profile')).width,
      },
      isAffix: false,
    };
  },
  created() {
    this.$store.dispatch('fetchProfile');
  },
  mounted() {
    // ref
    // const profileEle = document.querySelector('#profile');
    // TODO: affix
    // window.onscroll = () => {
    //   console.log(profileEle.getBoundingClientRect());
    // };
    // this.affixStyle.width = getComputedStyle(profileEle).width;
  },
  methods: {
    handleFollow() {
      MessageBox.alert('welcome follow me', window.innerWidth);
    },
  },
  computed: {
    profile() {
      return this.$store.state.profile.data;
    },
  },
};
</script>

<style lang="scss">
@import '~styles/mixins';
#profile {
  @include res-to( 0, 1240) {
    display: none;
  };
  min-height: 1px;
  .affix-wrapper {
    .profile-data {
      text-align: center;
      box-shadow: none;
      .avatar-wrapper {
        margin: auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #eee;
        .avatar {
          max-width: 100px;
          border-radius: 50%;
        }
      }
      .name {
        font-size: 22px;
        margin-top: 18px;
      }
      .bio {
        line-height: 1.4;
        margin: 0px 0 10px;
      }
      .address {
        margin-bottom: 10px;
        color: #333;
        font-size: 14px;
        @include line-clamp(1);
      }
      .social-list {
        list-style: none;
        margin-left: -20px;
        // margin-top: 25px;
        padding: 30px 0 10px;
        border-top: 1px solid #eee;
        li {
          padding-left: 0;
          margin-left: 10px;
          display: inline-block;
          a {
            text-decoration: none;
            .iconfont {
              font-size: 28px!important;
            }
          }
        }
      }
      .data {
        list-style: none;
        margin-left: -20px;
        margin-right: -20px;
        margin-top: 20px;
        border-top: 1px solid #eee;
        li {
          display: inline-block;
          padding: 20px;
        }
      }
    }
    .player-wrapper {
      margin-left: -10px;
      margin-top: 20px;
      iframe {
        width: calc(100% + 9px)
      }
    }
  }
}
</style>
