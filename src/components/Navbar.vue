<template>
    <div>
    <v-toolbar
      fixed
      color="black"
      dark
    > 
      <v-toolbar-title> <img src="../assets/logo.png" alt="" width="100"> </v-toolbar-title>
      <v-text-field
            placeholder="Jersey, Jacket, World Cup....."
            outline
            color="white"
            class="text-field"
      >
      </v-text-field>
      <v-btn @click="searchQuery" style="padding:0" flat icon ><v-icon>search</v-icon></v-btn>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" >
      <v-btn style="padding:0;padding-right:10%"  flat v-if="loginStatus == true" to="/upload" >
        <v-icon >cloud_upload</v-icon>
        upload
      </v-btn>
      <v-btn style="padding:0;padding-right:10%"  flat v-if="loginStatus == true" @click="logout">
        <v-icon >person</v-icon>
        logout
      </v-btn>

      <v-btn to="login" style="padding:0;padding-right:10%" flat v-if="loginStatus==false"> <h4> <strong> Login </strong> </h4>
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
        'addToCart','incQty','decQty','openModal', 'searchQuery'
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
  h4 {
     font-family: "Muli", sans-serif;
     font-weight: 700
  }
  .text-field {
    margin-left: 20px
  }
</style>


