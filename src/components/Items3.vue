<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md4 order-sm2 v-for="(item, index) in items" :key="index" >
            <v-card-media>
                <div class="container">
                    <img :src="item.imgSrc" alt=""  class="image">
                    <div class="middle">
                        <div>
                            <h4 class="item-name"> <strong> Nike Men's {{item.itemName}} 18/19 Jersey </strong> </h4>
                            <h3 class="price"> <strong>${{item.price}} </strong> </h3>
                        </div>
                    </div>
                    <div class="middle-btm">
                        <v-btn @click="addToCart(index)" flat small icon> <v-icon color="grey lighten-1">shopping_cart</v-icon> </v-btn>
                        <v-btn v-if="loginStatus==true" @click="deleteItem(index)"> <v-icon size="5px">block</v-icon> Delete </v-btn>
                    </div>
                    
                </div>
            </v-card-media>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState,mapActions} from 'vuex'
    export default {
        data () {
            return {
                loginStatus: false
            }
        },
        computed: {
            ...mapState([
                'items'
            ])
        }
        ,
        methods: {
            ...mapActions([
                'addToCart', 'deleteItem'
            ])
        },
        created:function(){
            this.$store.dispatch('getPost')
            if (localStorage.hasOwnProperty('token')) {
                this.loginStatus = true
            }
            else {
                this.loginStatus = false
            }
        }
    }
</script>


<style scoped>
.container {
    position: relative;
    width: 50%;
}
item-name {
    font-size: 16px !important;
    display: inline-block;
    font-family: "Muli", sans-serif !important;
}

.price {
    font-size: 30px !important;
    font-family: "Muli",sans-serif;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.middletop {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  text-decoration-color: black
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
