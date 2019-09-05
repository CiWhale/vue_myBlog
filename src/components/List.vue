<template>
    <div class="List">
       <Header/>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="body" label="内容"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next"
                     @current-change="handleCurrentChange"
                     :total="total" :page-size="pageSize"
                      style="text-align: center">
      </el-pagination>
    </div>
</template>

<script type="text/javascript">
  const  Header = ()=> import('./Header')
    export default {
        name:'List',
        data() {
            return {
              msg:[],
              total:0,
              pageSize:3,
              currentPage:1
            }
        },
        components: {Header},
        created:function () {
//          this.axios.get('./../../static/txt.json').then((res)=>{
//            this.msg = res.data;
//            this.total = res.data.length;
//          })
          this.msg = JSON.parse(localStorage.getItem('list'));
          this.total = JSON.parse(localStorage.getItem('list')).length;
        },
      methods:{
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val;
        },
        handleDelete:function(index,row){
          this.msg.splice(index,1);
        }
      },
      computed:{
        tableData:function () {
            return this.msg.slice((this.currentPage -1) * this.pageSize,this.currentPage * this.pageSize,)
        }
      }
    }
</script>

<style scoped>
</style>
