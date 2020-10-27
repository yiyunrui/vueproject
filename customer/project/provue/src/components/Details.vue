<template>
    <div class="details container">
        <router-link to="/" class="btn btn-default">返回</router-link>
       <h1 class="page-header">
           姓名：{{items.name}}
           <span class="pull-right">
               <router-link class="btn btn-primary" v-bind:to="'/edit/'+items.id">
               编辑</router-link>
               <button class="btn btn-danger" v-on:click="detale(items.id)">删除</button>
           </span>
       </h1>
       <ul class="list-group">
           <li class="list-group-item">电话：<span>{{items.phone}}</span></li>
           <li class="list-group-item">邮箱：<span>{{items.email}}</span></li>
       </ul>
         <ul class="list-group">
           <li class="list-group-item">学历：<span>{{items.education}}</span></li>
           <li class="list-group-item">毕业院校：<span>{{items.school}}</span></li>
            <li class="list-group-item">个人简介：<span>{{items.desc}}</span></li>
       </ul>
    </div>

</template>

<script>
export default {
  name: 'details',
  data () {
    return {
     items:''
    }
  },
   methods:{
    custed(id){
      this.$http.get("http://localhost:3000/user/"+id)
      .then(function(response){
        this.items=response.body
      })
    },
    detale(id){
       this.$http.delete('http://localhost:3000/user/'+id).then(function(response){
           this.$router.push({path:'/',query:{alert:'用户删除成功'}})
       })
    }
  },
  created(){
      this.custed(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
