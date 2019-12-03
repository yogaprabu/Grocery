import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_105.jpg?ts=1550658692",count:0,title:"Tata Salt",off:'15',cost:'150'},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_210169.jpg?ts=1556206700",count:0,title:"Tata Sampann Turmeric Powder"},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_27119.jpg?ts=1537854292",count:0,title:"Amul Pure Ghee"},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_333324.jpg?ts=1539070972",count:0,title:"Aashirvaad Shudh Chakki Whole Wheat Atta"},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_43.jpg?ts=1531132311",count:0,title:"Fortune Sunlite Refined Sunflower Oil"},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_39493.jpg",count:0,title:"Tata Sampann Unpolished Dall"},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_55388.jpg?ts=1544788274",count:0,title:"Patanjali Traditional Whole Wheat with Bran Chakki Atta "},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_82224.jpg?ts=1550658512",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_7.jpg?ts=1541309998",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_300785.jpg",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_380156.jpg?ts=1531286199",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_25268.jpg?ts=1537854290",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_14624.jpg?ts=1531132311",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_23742.jpg",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_25279.jpg?ts=1557832095",count:0,title:""},
      {src:"https://cdn.grofers.com/app/images/products/normal/pro_106.jpg?ts=1545908570",count:0,title:""}
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadedItems(state){
      return state.items
    },
      featuredItems(state,getters){
        return getters.loadedItems.filter(items=>items.count>0)
      }/*
    loadedItem(state){
        return(count)=>{
          return state.loadedItems.find((count)=>{
            return item.count === count
          })
        }
      }*/
  }
})
