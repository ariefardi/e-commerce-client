import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
    totalInCart: 0
  },
  mutations: {
    setItems (state, payload) {
      state.items = payload
    },
    addCart (state, payload) {
      state.cart.push(payload)
      state.totalInCart+=payload.price
    },
    deleteItemInState (state,payload) {
      state.items.splice(payload,1)
    },
    deleteItem (state,payload) {
      state.cart.splice(payload,1)
    }
  },
  actions: {
    getPost(context) {
      console.log('text')
      axios.get('http://localhost:3000/items/')
        .then(({data})=>{
          console.log('kok gak jalan ya')
          let result = data.items
          context.commit('setItems',result)
        })
        .catch(err =>{
          console.log(err)
        })
    },
    addToCart(context,index) {
      let test = this.state.items[index].itemName
      console.log(test)
      console.log('menambahkan',this.state.items[index].itemName)
      // console.log(this.state.cart)
      let itemAdd = this.state.items
      let cartAdd = this.state.cart
      let counter = 0
      let qtyAdd = 0
      for(var i=0;i<this.state.cart.length;i++){
        if (this.state.items[index]._id===this.state.cart[i]._id) {
          counter++
          qtyAdd = i
        }
        else{
          // console.log('test else')
        }
      }
      let temp  = {
        _id: itemAdd[index]._id,
        itemName: itemAdd[index].itemName,
        price: itemAdd[index].price,
        qty: 1,
        totalPrice: itemAdd[index].price
      }
      console.log(temp)
      if (counter===0) {
        context.commit('addCart',temp)
      }
      else{
        cartAdd[qtyAdd].totalPrice+=temp.price
        cartAdd[qtyAdd].qty++
        this.state.totalInCart+=temp.price
      }
      // context.commit('addCart',item)
    },
    incQty (context,index) {
      // context.commmit('addQty',index)
      this.state.cart[index].qty++
      this.state.cart[index].totalPrice+=this.state.cart[index].price
      this.state.totalInCart+=this.state.cart[index].price
    },
    decQty (context,index) {
      console.log(index)
      let price = this.state.cart[index].price
      console.log(price)
      this.state.cart[index].qty--
      this.state.cart[index].totalPrice-=price
      console.log('before minus thisTotalIncart',this.state.totalInCart)
      this.state.totalInCart-=price
      console.log('after minus thisTotalIncart',this.state.totalInCart)
      console.log(this.state.cart)
      if (this.state.cart[index].qty<=0) {
        context.commit('deleteItem',index)
      }
    },
    deleteItem (context,index) {
      console.log("delete")
      console.log(index)
      axios.delete('http://localhost:3000/items/delete/'+this.state.items[index]._id)
      .then(()=>{
        console.log("deleted item")
        context.commit('deleteItemInState',index)
        // this.actions.getPost()
      })
      .catch(err=> {
        console.log(err.message)
      })
    }
  }
})
