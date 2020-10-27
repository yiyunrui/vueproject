<template>
    <div class="edit container">
            <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">编辑用户信息</h1>
        <form v-on:submit='updateitem' method="post">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model='customer.name'>
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model='customer.phone'>
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model='customer.email'>
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" class="form-control" placeholder="education" v-model='customer.education'>
                </div>
                <div class="form-group">
                    <label>毕业院校</label>
                    <input type="text" class="form-control" placeholder="school" v-model='customer.school'>
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <!-- <input type="text" class="form-control" placeholder="desc" v-model='customer.desc'> -->
                    <textarea class="form-control" v-model='customer.desc' rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">提交</button>
            </div>
        </form>
    </div>

</template>

<script>

export default {
  
  name: 'Add',
  data () {
    return {
      customer:{},
    }
  },
  methods:{
      fetchItem(id){
          this.$http.get('http://localhost:3000/user/'+id).then(function(response){
              this.customer=response.body;

          })

      },
        updateitem(e){
            if(!this.customer.name||!this.customer.email||!this.customer.phone){
                console.log('请输入对应的内容')
            }else{
                let updateCustomer={
                    name:this.customer.name,
                    phone:this.customer.phone,
                    email:this.customer.email,
                    education:this.customer.education,
                    school:this.customer.school,
                    desc:this.customer.desc
                }
                this.$http.put('http://localhost:3000/user/'+this.$route.params.id,updateCustomer).then(function(response){
                    // console.log(response)
                    this.$router.push({path:'/',query:{alert:'用户信息更新成功'}})
                })
            e.preventDefault()
            }
            e.preventDefault()
        }
    

  },
  created(){
    this.fetchItem(this.$route.params.id);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
