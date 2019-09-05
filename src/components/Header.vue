<template>
    <div class="Header">
        <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/datile">管理</router-link>
          <router-link to="/list">分页</router-link>
          <router-link to="/shop">购买</router-link>
          <router-link to="/login">登录</router-link>
        </nav>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'Header',
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped>
  nav{
    line-height: 80px;
    background: peachpuff;
    text-align: center;
    margin-bottom: 20px;
  }
  nav a{
    padding: 20px;
    text-decoration: none;
    background: #f0ad4e;
    border-radius: 10px;
    color: #0f0f0f;
  }
  nav .router-link-exact-active{
    background: #b2dba1;
    color: #3c763d;
  }
</style>
