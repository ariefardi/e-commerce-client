<template>
<v-dialog v-model="detailDialog" max-width="100%" >
    <main style="background-color:white" >
    <v-container grid-list-md text-xs-center class="margintop">
        <v-layout row wrap fill-height>
        <v-flex xs6>
            <v-card flat>
                <v-card-media >
                    <div class="container">
                        <img :src="detailItem.imgSrc" class="image">
                        <input v-if="loginStatus" @change="postImageHandler" style="margin-left:25%" type="file" />
                        <!-- <label for="file-7"><span></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label> -->
                        <v-btn v-if="loginStatus" @click="uploadPhoto(detailItem._id)" flat style="padding:0"> <strong> Upload Image </strong> <v-icon style="padding-left:20px">edit</v-icon> </v-btn>
                    </div>
                </v-card-media>
            </v-card>
        </v-flex>
        <v-flex xs5 class="descProduct">
            <v-card flat color="white">
                <div>
                    <p> <strong>  SKU: BR1242412  Brand: {{detailItem.brand}} </strong></p>
                    <h1 > Nike Men's {{detailItem.itemName}} 18/19 Authentic Jersey <v-btn v-if="loginStatus"  @click="updateModalOpen" style="padding:0" icon> <v-icon>edit</v-icon> </v-btn> </h1> 
                    <h2> <strong> ${{detailItem.price}} </strong> <v-btn v-if="loginStatus" @click="updatePriceModalOpen"  icon style="padding:0" > <v-icon> edit </v-icon> </v-btn> </h2>
                    <div>
                    <v-btn @click="addToCartFromDetail(detailItem)" small color="yellow"> <p> <strong> Add To Cart </strong> </p> </v-btn>
                    </div>
                </div>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
    </main>
</v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {storageRef} from  '@/firebase/firebase.js'
import swal from 'sweetalert'
import axios from 'axios'
 export default {
     created () {
         if (localStorage.hasOwnProperty('token')) {
                this.loginStatus = true
        }
        else {
                this.loginStatus = false
        }
     },
     data () {
         return {
             file: '',
             loginStatus: false,
         }
     },
    computed: {
      detailDialog: {
        get () {
          return this.$store.state.detailDialog
        },
        set () {
          this.$store.commit('setDetailDialog', false)
        }
      },
      ...mapState([
          'detailItem'
      ])
    },
    methods: {
      ...mapActions([
          'addToCartFromDetail', 'updateModalOpen','updatePriceModalOpen', 'postImageHandler', 'uploadPhoto'
      ])
    }
 }
</script>

<style scoped>
    p,h1,h2,h3,h4,h5 {
        text-align: left;
        font-family: "Muli",sans-serif;
    }
    h1 {
        font-size: 46px;
        font-weight: 800;
    }
    h2 {
        font-weight: 800px !important;
    }
    .margintop {
        margin-top: 5%
    }
    .descProduct {
        margin-top: 3%
    }
    main {
        clear: both;
        font-size: 0.75rem;
        margin: 0 auto;
        overflow: hidden;
        padding: 1rem 0;
        width: 100%;
    }

</style>
