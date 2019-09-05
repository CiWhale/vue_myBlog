<template>
    <div class="DatileNav" >
      <el-row class="tac">
        <el-col :span="12">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group >
                <template slot="title">分组一</template>
                <router-link to="datileAction">
                  <el-menu-item index="1-1">datileAction</el-menu-item>
                </router-link>

                <router-link to="datilekind">
                  <el-menu-item index="1-2">datilekind</el-menu-item>
                </router-link>

                <router-link to="datilemain">
                  <el-menu-item index="1-3">datilemain</el-menu-item>
                </router-link>

                <router-link to="datiletolo">
                  <el-menu-item index="1-4">datiletolo</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'DatileNav',
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped>
  .DatileNav{
    width: 20%;
    float: left;
  }
  .el-menu{
    border: none;
  }
  .el-submenu .el-menu-item{
    padding-right:0;
    min-width: 0;
  }
  a{
    text-decoration: none;
  }
</style>
