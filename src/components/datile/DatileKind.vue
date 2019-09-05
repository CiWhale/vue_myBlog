<template>
    <div class="DatileKind">
      <div class="box">
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'DatileKind',
        data() {
            return {
              tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }]
            }
        },
        components: {}
    }
</script>

<style scoped>
  .box{width: 75%;height: 500px;background: thistle;float: right}
</style>
