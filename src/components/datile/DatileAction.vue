<template>
    <div class="DatileAction">
      <div class="box">
            <ul>
              <li>
                <img :src="via" alt="">
              </li>
              <li>用户名:{{user}}</li>
            </ul>

          <div class="ri">
            <el-calendar v-model="value">
            </el-calendar>
          </div>

      </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'DatileAction',
        data() {
            return {
              via:require('../../assets/timg.jpg'),
              user:'',
              value: new Date()
            }
        },
        components: {},
        created(){
            this.user = localStorage.getItem('user')
        }
    }
</script>

<style scoped>
  .box{width: 75%;height: 500px;float: right}
  ul{
    float: left;
  }
  li{width: 200px;text-align: center;border:1px solid black}
  img{width: 150px}
  .ri{
    float: right;
    width: 75%;
    height: 500px;
  }
  .el-calendar-table .el-calendar-day{height: 0px !important;}
</style>
