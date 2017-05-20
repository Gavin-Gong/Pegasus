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
    created() {
      this.$nextTick(() => {
        const myChart = echarts.init(document.getElementById(this.id));
        setTimeout(() => {
          myChart.setOption(this.options);
          console.log(this.options);
        }, 0);
      });
    },
    updated() {
      console.log('updete');
      this.myChart.setOption(this.option);
    },
    mounted() {
      console.log('updete');
      this.myChart.setOption(this.option);
    },
    // activated() {
    //   this.myChart.setOption(this.option);
    // },
    props: {
      id: {},
      width: {
        type: String,
        default: '900px',
      },
      height: {
        type: String,
        default: '600px',
      },
      title: {
        type: String,
      },
      legend: {
        type: Array,
      },
      xData: {
        type: Array,
      },
      yData: {
        type: Array,
      },
    },
    data() {
      return {
        // id: Math.random().toString(36).substring(7),
        myChart: null,
      };
    },
    methods: {

    },

    computed: {
      options() {
        /* eslint-disable*/
        const series = this.yData.map((item) => {
          return {
            name: item.name,
            type: 'line',
            smooth: true,
            symbol: 'none',
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
