<template>
<div>
  <div :id="id" :style="{width, height}">

  </div>
</div>
</template>

<script>
  import { Card, Row, Col } from 'element-ui';
  import echarts from 'echarts';

  Vue.use(Card);
  Vue.use(Row);
  Vue.use(Col);

  // let myChart = null;

  export default {
    // updated() {
    //   if (this.myChart) {
    //     console.log('here');
    //     this.myChart.setOption(this.option);
    //   }
    // },
    props: {
      id: {},
      width: {
        default: '900px',
      },
      height: {
        default: '600px',
      },
      title: {
        default: 'gg',
      },
      legend: {
        default() {
          return ['邮件营销', '联盟广告'];
        },
      },
      xData: {
        /* eslint-disable */
        default() {
          return ['周一','周二','周三','周四','周五','周六','周日'];
        },
      },
      yData: {
        /* eslint-disable */
        default() {
          return [1, 132, 101, 134, 90, 230, 210];
        },
      },
    },
    data() {
      return {
        // id: Math.random().toString(36).substring(7),
        myChart: null
      };
    },
    mounted() {
      /* eslint-disable*/
      this.myChart = echarts.init(document.getElementById(this.id));
      setTimeout(() => {
        this.myChart.setOption(this.options);
        console.log(this.options);
      }, 1000);
    },
    methods: {

    },

    computed: {
      options() {
        const series = this.yData.map((item) => {
          return {
            name: item.name,
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: item.data,
          };
        });
        return {
          title: {
            text: this.title,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985',
              },
            },
          },
          legend: {
            data: this.legend,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: this.xData,
            },
          ],
          yAxis: [
            { type: 'value' },
          ],
          series,
        };
      },
    },
  };
</script>

<style lang="scss" >

</style>
