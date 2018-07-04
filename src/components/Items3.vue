<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md4 order-sm2 v-for="(item, index) in items" :key="index" >
            <v-card-media>
                <div>
                    <img :src="item.imgSrc" alt="">
                    <v-btn @click="addToCart(index)"> <v-icon color="grey lighten-1">shopping_cart</v-icon> </v-btn>
                    <v-btn v-if="loginStatus==true" @click="deleteItem(index)"> <v-icon>block</v-icon> Delete </v-btn>
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