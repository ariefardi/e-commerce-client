import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
    totalInCart: 0,
    dialog: false,
    detailDialog: false,
    detailItem: ''
  },
  mutations: {
    setItems (state, payload) {
      state.items = payload
    },
    setDetailItem (state, payload) {
      state.detailItem = payload
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
    },
    setDialog (state, payload) {
      state.dialog = payload
    },
    setDetailDialog (state, payload) {
      state.detailDialog = payload
    },
    addQty (state, payload) {
      this.state.cart[payload].qty++
      this.state.cart[payload].totalPrice+=this.state.cart[payload].price
      this.state.totalInCart+=this.state.cart[payload].price
    },
    setCheckout(state, payload) {
      state.cart = payload
    }
  },
  actions: {
    openModal (context) {
      console.log('Open modal')
      context.commit('setDialog', true)
    },
    openDetailDialog (context, index) {
      let detail = this.state.items[index]
      console.log(detail, ' ini detal ')
      console.log('Open modal dialog')
      context.commit('setDetailItem', detail)
      context.commit('setDetailDialog', true)
    },
    getPost(context) {
      console.log('text')
      axios.get('http://localhost:3000/items/')
        .then(({data})=>{
          console.log(data)
          let result = data.items
          context.commit('setItems',result)
        })
        .catch(err =>{
          console.log(err)
        })
    },

    addToCartFromDetail(context, item) {
      console.log(item)
      // let itemAdd = this.state.items
      let cartAdd = this.state.cart
      let counter = 0
      let qtyAdd = 0
      for(var i=0;i<this.state.cart.length;i++){
        if (item._id===this.state.cart[i]._id) {
          counter++
          qtyAdd = i
        }
      }
      swal({
        title: "Are you sure?",
        text: "Your item will be sent to you shopping cart",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willBuy) => {
        if (willBuy) {
          if (counter==0) {
            context.commit('addCart', item)
          }
          else{
            cartAdd[qtyAdd].totalPrice+=item.price
            cartAdd[qtyAdd].qty++
            this.state.totalInCart+=item.price
          }
          swal("Successfully added item in your shopping cart!", {
            icon: "success",
          });
        }
      });
     
    },
    addToCart(context,index) {
      let test = this.state.items[index].itemName
      console.log(test)
      console.log('menambahkan',this.state.items[index])
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
        totalPrice: itemAdd[index].price,
        imgSrc: itemAdd[index].imgSrc
      }
      console.log(temp)
      swal({
        title: "Are you sure?",
        text: "Your item will be sent to you shopping cart",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willBuy) => {
        if (willBuy) {
          if (counter===0) {
            context.commit('addCart',temp)
          }
          else{
            cartAdd[qtyAdd].totalPrice+=temp.price
            cartAdd[qtyAdd].qty++
            this.state.totalInCart+=temp.price
          }
          swal("Successfully added item in your shopping cart!", {
            icon: "success",
          });
        }
      });
      // context.commit('addCart',item)
    },
    incQty (context,index) {
      console.log(this.state.cart[index])
      context.commit('addQty',index)
    },
    decQty (context,index) {
      console.log(index)
      let price = this.state.cart[index].price
      // console.log(price)
      if (this.state.cart[index].qty<=1) {
        this.state.totalInCart-= price
        context.commit('deleteItem',index)
      }
      else {
        this.state.cart[index].qty--
        this.state.cart[index].totalPrice-=price
        this.state.totalInCart-=price
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
    },
    checkout(context,total) {
      swal({
        title: `Your total purchase : $${total}`,
        text: "You will buy all your item in your shopping cart",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willBuy) => {
        if (willBuy) {
          context.commit('setCheckout',[])
          swal("Succesfully buy all your item in shopping cart", {
            icon: "success",
          });
        }
      });
    }
  }
})
