<template>
    <div class="DatileMain">
      <div class="box">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          v-model="value"
          :data="data">
        </el-transfer>
        {{allVal}}

        <el-row>
          <el-col :span="8" >
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'DatileMain',
      data() {
        const generateData = _ => {
          const data = [];
          const kind = ['一点点', '串串香', '椰子鸡', '麻辣火锅', '烤肉', '油泼面', '钵钵鸡'];
          const pinyin = ['yidiandian', 'chuanchuanxiang', 'yeziji', 'malahuoguo', 'kaorou', 'youpomian', 'boboji'];
          kind.forEach((city, index) => {
            data.push({
              label: city,
              key: index,
              pinyin: pinyin[index]
            });
          });
          return data;
        };
        return {
          data: generateData(),
          value: [],
          filterMethod(query, item) {
            return item.pinyin.indexOf(query) > -1;
          }
        };
      },
        computed:{
            allVal:function () {
              localStorage.setItem('val',JSON.stringify(this.value));
            }
        },
        created(){
          this.value = JSON.parse(localStorage.getItem('val'))
        }
    }
</script>

<style scoped>
  .box{width: 75%;height: 500px;background: thistle;float: right}

  .el-transfer{
    float: left;
  }
  .el-card{
    float: right;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
