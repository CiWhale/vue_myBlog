<template>
    <div class="Shopping">
      <Header/>
      <div class="kind">
        <el-table  :data="tableData" stripe style="width:100%">
          <el-table-column prop="brand" label="品名" width="180">
          </el-table-column>
          <el-table-column prop="single" label="产品名" width="180">
          </el-table-column>
          <el-table-column prop="" label='图例'>
            <template slot-scope="scope">
              <img :src="scope.row.src" alt="">
            </template>
          </el-table-column>
          <el-table-column prop="price" label="单价/RMB" >
          </el-table-column>
          <el-table-column prop="num" label="选取">
            <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" @change="handleChange(scope)" :min="1"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="subtotal" label="总计" >
          </el-table-column>
        </el-table>
      </div>
      <h2>{{totalSum}}</h2>

    </div>
</template>

<script type="text/javascript">
  const  Header = ()=> import('./Header')
    export default {
        name:'Shopping',
      data() {
        return {
          tableData: []
        }
      },
      created(){
            this.axios.get('./../../static/shop.json')
              .then((res)=>{
                this.tableData = res.data;
              });
      },
      components: {Header},
      methods: {
        handleChange(value) {
          value.row.subtotal =  value.row.price * value.row.num
        },
        total:function () {

        }
      },
      computed:{
        totalSum:function () {

            return this.tableData.reduce((sum,data)=>{
               return sum + Number(data.subtotal)
            },0)
        }
      }
    }
</script>

<style scoped>
  img{width: 80px}
  h2{font-size: 30px;text-align: right;margin-right: 30px}
</style>
