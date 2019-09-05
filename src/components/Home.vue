<template>
  <div class="Home">
      <Header/>
      <div class="main">
        <h1>总览条目 {{user}}</h1>

        <div class="slide">
          <el-carousel :interval="5000">
            <el-carousel-item v-for="item in imgList" :key="item.key">
              <img :src="item.src" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="content" v-for="item of list">
          <router-link :to="/single/+item.id">
            <h3 v-codeStyle>{{item.id}}.{{item.title | capitalize}}</h3>
          </router-link>
          <article>{{item.body | capitalize}}</article>
        </div>
        <el-button type="primary" plain @click="showMore">主要按钮</el-button>
      </div>
  </div>
</template>

<script>
  const  Header = ()=> import('./Header');


export default {
  name: 'Home',
  components:{Header},
  data () {
    return {
        user:'',
        list:[],
        n:-5,
        imgList:[{key:1,src:require('../assets/slide/1.jpg')},{key:2,src:require("../assets/slide/2.jpg")},
          {key:3,src:require("../assets/slide/3.jpg")},{key:4,src:require("../assets/slide/4.jpg")}]
    }
  },
  created:function () {
    this.axios.get('./../../static/txt.json').then((res)=>{
      this.$store.commit('initList',res.data);
      this.list = this.$store.state.storeList.slice(0,10);
      this.user=localStorage.getItem('user');
    })
  },
  methods:{
    showMore:function () {
      this.axios.get('./../../static/txt.json').then((res)=>{
          if(this.n <10){
              this.n += 5;
              let data = res.data.slice(10 + this.n,15 + this.n);
              this.list = this.list.concat(data);
        }else {
            this.$message({
              showClose: true,
              message: '已加载完所有内容',
              type: 'warning'
            });
          }

      }).catch(()=>{
        this.$message({
          showClose: true,
          message: '数据加载失败',
          type: 'error'
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    text-align: center;
  }
  .main h1{
    line-height: 80px;
    text-align: center;
    background: darkcyan;
    font-size: 50px;
    color: white;
    margin-bottom: 30px;
  }
  .content{
    line-height: 80px;
    text-align: center;
    background: cadetblue;
    margin-bottom: 10px;
  }
  .content h3{
    line-height: 30px;
    font-size: 24px;
  }
  .content article{
    line-height: 30px;
  }

  .slide{
    width: 960px;
    margin: 0 auto;
    margin-bottom: 30px;

  }
  .el-carousel--horizontal{
    overflow: hidden;
  }
   .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

   .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
