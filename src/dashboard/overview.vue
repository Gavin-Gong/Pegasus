<template>
  <div >
    <el-card id="dashboard-overview">
      <el-row :gutter="40" class="panel-list">
        <el-col :span="6">
          <el-card>
            <div class="top-panel">
              <i class="iconfont icon-day" style="color: #f44336"></i>
              <div class="data-panel">
                <p>本月写作天数</p>
                <h2>12</h2>
              </div>
            </div>
            <div class="bottom-panel">
              <i class="iconfont icon-"></i>
              截止到今日
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="top-panel">
              <i class="iconfont icon-date" style="color: #f44336"></i>
              <div class="data-panel">
                <p>写作天数</p>
                <h2>{{data.streak_week_count}}</h2>
              </div>
            </div>
            <div class="bottom-panel">
              <i class="iconfont icon-"></i>
              所有时间
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="top-panel">
              <i class="iconfont icon-article" style="color: #f44336"></i>
              <div class="data-panel">
                <p>文章数</p>
                <h2>{{data.post_count}}</h2>
              </div>
            </div>
            <div class="bottom-panel">
              <i class="iconfont icon-"></i>
              所有时间
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="top-panel">
              <i class="iconfont icon-word" style="color: #f44336"></i>
              <div class="data-panel">
                <p>写作字数</p>
                <h2>{{data.word_count}}</h2>
              </div>
            </div>
            <div class="bottom-panel">
              <i class="iconfont icon-"></i>
              所有时间
            </div>
          </el-card>
        </el-col>


      </el-row>
      <el-card class="chart-panel">


        <!--<e-chart
          title="昨日数据统计"
          :legend="['点击数, ip数']"
          :x-data="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]"
          :y-data="[{}]"
          ></e-chart>-->

        <!--week_post-->
        <e-chart
          title="最近周数据"
          :legend="['文章数']"
          :y-data="[{name: '文章数', data: data.week_post_statistics}]"
          :x-data="[1,2,3,4,5,6,7,8,9,10,11,12]"></e-chart>
      </el-card>
    </el-card>
  </div>
</template>

<script>
  import { Card, Row, Col } from 'element-ui';
  import EChart from './components/EChart';

  Vue.use(Card);
  Vue.use(Row);
  Vue.use(Col);

  export default {
    components: {
      EChart,
    },
    beforeCreate() {
      this.$store.dispatch('fetchStatistics');
    },
    mounted() {

    },
    computed: {
      data() {
        return this.$store.state.statistics.data;
      },
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
#dashboard-overview {
  height: 100vh;
  overflow: auto;
  .panel-list {
    .top-panel {
      overflow: hidden;
      .iconfont {
        font-size: 60px;
        line-height: 0;
        line-height: 1.2;
      }
      .data-panel {
        float: right;
        h2 {
          text-align: right;
          font-size: 36px;
        }
        p {
          text-align: right;
        }
      }
    }
    .bottom-panel {
      font-size: 14px;
      padding-top: 10px;
      color: #777;
      border-top: 1px solid #ddd;
    }
  }
  .chart-panel {
    margin-top: 40px;
  }
}
</style>
