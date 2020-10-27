<template>
  <div id="pagetwo">
      <h2>page-two list</h2>
     <ul>
         <li v-for="item in produce">
             <span>{{item.name}}${{item.price}}</span>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
     computed:{
        produce(){
            return this.$store.state.pro
        }

    }


}
</script>

<style scoped>
ul{
    padding: 20px 30px;
    margin: 30px 0;
    list-style: none;
}
li{
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
    background:crimson;
}

</style>
