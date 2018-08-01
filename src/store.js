import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from './router'
import {storageRef} from '@/firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
    totalInCart: 0,
    dialog: false,
    detailDialog: false,
    updateDialog: false,
    updatePriceDialog: false,
    detailItem: '',
    file: '',
    querySearch: '',
    queryCount: 0,
    WorldCup: true,
    Jacket: true
  },
  mutations: {
    setQuerySearch (state, payload) {
      state.querySearch = payload
    },
    setItems (state, payload) {
      state.items = payload
      state.querySearch = ''
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
    setUpdateDialog (state, payload) {
      state.updateDialog = payload
    },
    setUpdatePriceDialog (state, payload) {
      state.updatePriceDialog = payload
    },
    addQty (state, payload) {
      this.state.cart[payload].qty++
      this.state.cart[payload].totalPrice+=this.state.cart[payload].price
      this.state.totalInCart+=this.state.cart[payload].price
    },
    setCheckout(state, payload) {
      state.cart = payload
    },
    setFile (state, payload) {
      state.file = payload
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
      axios.get('htts://api-ecommerce.ariefardi.xyz/items')
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
      axios.delete('https://api-ecommerce.ariefardi.xyz/items/delete/'+this.state.items[index]._id)
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
        title: `Your total purchase : $${total.toString().slice(0,5)}`,
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
    },
    updateModalOpen (context) {
      console.log('open modal')
      context.commit('setUpdateDialog', true)
    },
    updatePriceModalOpen(context) {
      console.log('Open Price Modal')
      context.commit('setUpdatePriceDialog', true)
    },
    postImageHandler(context,event) {
      console.log(event.target.files[0])
      context.commit('setFile', event.target.files[0])
    },
    uploadPhoto (context,id) {
      console.log('upload')
      console.log(this.state.file)
      console.log('ini id nya',id)
      // console.log(storageRef, ' storage ref')
      storageRef.ref('item_photos/'+ this.state.file.name).put(this.state.file)
        .then(snapshot=> {
           console.log(snapshot)
           storageRef.ref('item_photos/'+ this.state.file.name).getDownloadURL()
           .then(urlResponse=> {
               // console.log(urlResponse,'ini urlnya coy')
               this.imgSrc = urlResponse
               console.log(this.imgSrc)
                   axios.put('https://api-ecommerce.ariefardi.xyz/update/'+id,{
                       itemName : this.state.detailItem.itemName,
                       price: this.state.detailItem.price,
                       brand : this.state.detailItem.brand,
                       gender : this.state.detailItem.gender,
                       released : this.state.detailItem.released,
                       typeJersey : this.state.detailItem.typeJersey,
                       imgSrc: urlResponse
                   })
                   .then(data=>{
                       console.log(data)
                       swal('berhasil upload')
                       .then(reload=> {
                           console.log(reload)
                           location.reload()
                       })
                   })
           })
        })
    },
    searchQuery ({commit}) {
      console.log('search query', this.state.querySearch)
      let query = this.state.querySearch
      let items = this.state.items
      let result = []
      // console.log(items)
      if (!query) {
        axios.get('https://api-ecommerce.ariefardi.xyz/items')
        .then(({data})=> {
          commit('setItems', data.items)
        })
      }
      else {
        for(var i=0;i<items.length;i++) {
          if (items[i].typeJersey==query) {
            result.push(items[i])
          }
        }
        commit('setItems', result)
      }
    },
    backHome ({commit}) {
      console.log('back home')
      router.push('/')
      axios.get('https://api-ecommerce.ariefardi.xyz/items')
      .then(({data})=> {
        commit('setItems', data.items)
      })
    }
  }
})
