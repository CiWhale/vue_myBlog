<template>
    <div class="Login">
        <div class="main">
          <h3>登录</h3>
          <div class="box">
            用户名:<el-input v-model="user" placeholder="请输入用户名"></el-input>
            密  码:<el-input v-model="pass" placeholder="请输入密码"></el-input>
          </div>
          <el-button type="primary" @click="sub">登录</el-button>
          <el-button type="warning">重置</el-button>

        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'Login',
        data() {
            return {
                user:'',
                pass:'',
            }
        },
        components: {},
        created:function () {
          this.user=localStorage.getItem('user');
        },
        methods:{
            sub:function () {
              this.axios.post('/api',{
                  user:this.user,
                  pass:this.pass
              }).then((res)=>{
                  if(res.data === 'user'){
                      this.$router.push('/');
                      localStorage.setItem('user',this.user);
                  }else {
                    this.$message({
                      message: '用户名或密码错误',
                      type: 'warning'
                    });
                  }
              }).catch(()=>{
                this.$message.error('数据连接失败');
              })
            }
        }
    }
</script>

<style scoped>
  .main{
    width: 500px;
    height:300px;
    margin: 150px auto;
    border: 1px solid black;
    text-align: center;
  }
  .main h3{
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .main .box{
    width: 75%;
    margin:0 auto;
    margin-bottom: 20px ;
  }
</style>
