<template>
    <div>
    <v-toolbar
      fixed
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

      <v-btn v-if="loginStatus==false" icon @click="openModal" flat>
          <v-badge left color="red">
              <span slot="badge" > {{cart.length}} </span>
              <v-icon>shopping_cart</v-icon>
          </v-badge>
      </v-btn>
    </v-toolbar-items>
    </v-toolbar>
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
        'addToCart','incQty','decQty','openModal'
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


