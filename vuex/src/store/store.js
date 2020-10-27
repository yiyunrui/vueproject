import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export const store = new Vuex.Store({
    state:{
        pro:[
            {name:'大愣子',price:200},
            {name:'二愣子',price:100},
            {name:'三愣子',price:80},
            {name:'四愣子',price:50},
        ]
    },
    getters:{
        propice(state){
            return state.pro.map(item=>{
                return {
                    name:`**${item.name}**`,
                    price:item.price
                }
            })
        }

    },
    mutations:{
        jiangdi(state,payload){
            state.pro.forEach(item=>{
                item.price -= payload
            })
        }

    },
    actions:{
        jiangdi(context,payload){
            setTimeout(()=>{
                context.commit('jiangdi',payload)
            },2000)
          

        }

    }
})