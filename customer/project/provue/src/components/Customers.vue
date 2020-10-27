<template>
    <div class="customers container">
      <Alert v-if="alert" :message='alert'></Alert>
      <h1 class="page-header">用户管理系统</h1>
      <input type="text" class="form-control" placeholder='搜索' v-model='filterInput'>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th>
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in filterBy(items,filterInput)'>
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.email}}</td>
            <td>
              <router-link :to="'/item/'+item.id" class="btn btn-default">详情</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'Customers',
  data () {
    return {
      items:[],
      alert:'',
      filterInput:''
    }
  },
  methods:{
    custed(){
      this.$http.get("http://localhost:3000/user")
      .then(function(response){
        this.items=response.body
      })
    },
     filterBy(items,value){
    return items.filter(function(item){
      return item.name.match(value)
    })
  }
  },
 
  created(){
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert
    }
    this.custed();
  },
  updated(){
    this.custed();
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
