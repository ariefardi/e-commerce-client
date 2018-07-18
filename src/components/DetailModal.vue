<template>
<v-dialog v-model="detailDialog" max-width="50.4%"  >
    <main style="background-color:white" >
    <v-container grid-list-md text-xs-center class="margintop">
        <v-layout row wrap fill-height>
        <v-flex xs1>
            <v-card>
                <v-card-text>xs1</v-card-text>
            </v-card>
        </v-flex>
        
        <v-flex xs6>
            <v-card flat>
                <v-card-media >
                    <div class="container">
                        <img :src="detailItem.imgSrc" class="image">
                    </div>
                </v-card-media>
            </v-card>
        </v-flex>
        <v-flex xs5 class="descProduct">
            <v-card flat color="white">
                <div>
                    <p> <strong>  SKU: BR1242412  Brand: Nike </strong></p>
                    <h1 > Nike Men's {{detailItem.itemName}} 18/19 Authentic Jersey </h1>
                    <h2> <strong> ${{detailItem.price}} </strong> </h2>
                    <div>
                    <v-btn @click="addToCartFromDetail(detailItem)" small color="yellow"> <p> <strong> Add To Cart </strong> </p> </v-btn>
                    </div>
                </div>
            </v-card>
        </v-flex>
        <v-flex xs1>
            <v-card>
                <v-card-text>xs 1</v-card-text>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
    </main>
</v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex'
 export default {
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
          'addToCartFromDetail'
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
        width: 960px;
    }

</style>
