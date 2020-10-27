<template>
  <div id="pageone">
     <h2>page-one list</h2>
     <ul>
         <li v-for="item in produce">
             <span>{{item.name}}${{item.price}}</span>
         </li>
     </ul>
     <button @click.prevent = 'jiangdi(10)'>降低价格</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    computed:{
        // produce(){
        //     return this.$store.getters.propice
        // }
        ...mapGetters({
            produce:'propice'
        })

    },
    methods:{
        // jiangdi(price){
        //     // return this.$store.commit('jiangdi')
        //     return this.$store.dispatch('jiangdi',price)
        // }
        ...mapActions([
            'jiangdi'
        ])
    }

}
</script>

<style scoped>
ul{
    padding: 20px 30px;
    background: rgb(166, 231, 91);
    list-style: none;
}
li{
    display: inline-block;
    margin: 0 10px;
    padding: 10px 20px;
    background:burlywood
}

</style>
