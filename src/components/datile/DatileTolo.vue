<template>
    <div class="DatileTolo">
      <div ref="mychart" id="chart" :style="{width: '500px', height: '500px',float:'left'}"></div>
      <div ref="myCirle" :style="{width: '500px', height: '500px',float:'right'}"></div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'DatileTolo',
        data() {
            return {
            }
        },
        components: {},
        methods:{},
        mounted:function(){
              //初始化echarts实例
              let myChart = this.echarts.init(this.$refs.mychart)
              // 绘制图表
            var optiona = {
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },

              series : [
                {
                  name: '占比',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                    {value:120, name:'Mon'},
                    {value:200, name:'Tue'},
                    {value:150, name:'Wed'},
                    {value:80, name:'Thu'},
                    {value:70, name:'Fri'},
                    {value:110, name:'Sat'},
                    {value:130, name:'Sun'},
                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            };
            //防止越界，重绘canvas
            window.onresize = myChart.resize;
            myChart.setOption(optiona);//设置option


          //初始化echarts实例
          let myCirle = this.echarts.init(this.$refs.myCirle)
          // 绘制图表

                var optionb = {
                  xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                  }]
                }

          window.onresize = myCirle.resize;
          myCirle.setOption(optionb);//设置option

        }
    }
</script>

<style scoped>
</style>
