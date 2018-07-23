<template>
    <v-layout row wrap>
        <v-flex xs12 sm4 md3 order-md4 order-sm2 v-for="(item, index) in items" :key="index" >
            <v-card-media>
                <div class="container">
                    <img :src="item.imgSrc" alt=""  class="image">
                    <div class="middle">
                        <div>
                            <h4 class="item-name"> <strong> {{item.brand}} {{item.gender}} {{item.itemName}} {{item.released}} {{item.typeJersey}} Jersey </strong> </h4>
                            <h3 class="price"> <strong>${{item.price}} </strong> </h3>
                        </div>
                    </div>
                    <div class="middle-btm">
                        <v-btn v-if="loginStatus==false" @click="addToCart(index)" flat small icon> <p> <v-icon color="grey lighten-1">shopping_cart</v-icon> </p> </v-btn>
                        <v-btn v-if="loginStatus==false" @click="openDetailDialog(index)" flat small icon > <p> <v-icon color="grey lighten-1" >fa fa-eye</v-icon> </p> </v-btn>
                        <v-btn v-if="loginStatus==true" @click="deleteItem(index)"> <v-icon style="padding-bottom:40%">block</v-icon> </v-btn>
                        <v-btn v-if="loginStatus==true" @click="updateItem(index)"> <v-icon style="padding-bottom:40%">fa fa-edit</v-icon> </v-btn>
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
                'addToCart', 'deleteItem', 'openDetailDialog','updateItem'
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
    width: 100%;
    height: 100%
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
  opacity: 0.2;
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
