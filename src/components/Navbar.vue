<template>
    <div>
    <v-toolbar
      absolute
      color="black"
      dark
    > 
      <v-toolbar-title> <img src="../assets/logo.png" alt="" width="100"> </v-toolbar-title>

      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" >
      <v-btn flat v-if="loginStatus == true" to="/upload" >
        <v-icon >cloud_upload</v-icon>
        upload
      </v-btn>
      <v-btn flat v-if="loginStatus == true" @click="logout">
        <v-icon >person</v-icon>
        logout
      </v-btn>

      <v-btn to="login" flat v-if="loginStatus==false"> Login
      </v-btn>

      <v-btn icon @click.native.stop="dialog = true" >
          <v-badge left color="red">
              <span slot="badge" > {{cart.length}} </span>
              <v-icon>shopping_cart</v-icon>
          </v-badge>
      </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-dialog v-model="dialog" scrollable max-width="500px" >
        <v-container grid-list-md text-xs-center class="cont">
          <h1>Shopping Cart <v-icon>shopping_cart</v-icon> </h1>

          <v-layout>
             <v-flex v-for="(item, index) in cart" :key="index" xs12>
               <v-card color="#607D8B">
               <v-card-text class="px-0">Item Name : {{item.itemName}} <br/> Jersey World Cup 2018/2019 <br/> 
               Price : {{item.totalPrice | currency}} 
               quantity: x{{item.qty}} </v-card-text>
               <v-card-text> <v-btn @click="incQty(index)" small>+</v-btn> <v-btn @click="decQty(index)" small>-</v-btn> </v-card-text>
               </v-card>
             </v-flex>

             <v-card> {{totalInCart | currency}} </v-card>
          </v-layout>
          
        </v-container>
    </v-dialog>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import swal from 'sweetalert'
export default{
  computed: {
    ...mapState([
      'cart','totalInCart'
    ])
  },
  methods: {
    ...mapActions([
        'addToCart','incQty','decQty'
    ]),
    logout () {
      console.log('clear consolelog')
      swal({
        title: "Are you sure to logout?",
        text: "Once logout, you need to login again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal('You already logout', {
            icon: "success",
          });
          localStorage.clear()
          window.location = '/'
        } 
        else {
          swal("You gak jadi logout");
        }
      });
    }
  },
  data () {
    return {
      dialog: false,
      loginStatus: false
    }
  },
  created () {
    if (localStorage.hasOwnProperty('token')) {
      this.loginStatus = true
    }
    else{
      this.loginStatus = false
    }
  },
  filters:{
      currency(price){
        return '$'.concat(price.toFixed(2))
      }
    }
}
</script>

<style lang="scss" scoped>
  .cont {
    background-color: #CFD8DC
  }
</style>


