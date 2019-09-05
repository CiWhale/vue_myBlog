<template>
    <div class="Single">
      <h1>详情页面</h1>
      <div class="content">
        <h3>{{list.id}}.{{list.title}}</h3>
        <article>{{list.body}}</article>
      </div>


    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                list:{}
            }
        },
        components: {},
      created:function () {
          this.axios.get('http://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
            .then((res)=>{
              this.list = res.data;
            })
        }
    }
</script>

<style scoped>

   h1{
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


</style>
