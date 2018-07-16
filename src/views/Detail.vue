<template>
<div>
    <Navbar/>
    <CartModal/>
    <v-container grid-list-md text-xs-center class="margintop">
        <v-layout row wrap fill-height>
        <v-flex xs1>
            <v-card>
                <v-text>xs 1</v-text>
            </v-card>
        </v-flex>
        
        <v-flex xs6>
            <v-card flat>
                <v-card-media >
                    <div class="container">
                        <img src="https://cdn7.bigcommerce.com/s-35hqfrub/images/stencil/500x659/products/40747/77804/BR2724__10833.1521066797.jpg?c=2" class="image">
                    </div>
                </v-card-media>
            </v-card>
        </v-flex>
        <v-flex xs5 class="descProduct">
            <v-card>
                <div>
                    <p> <strong>  SKU: BR1242412  Brand: Nike </strong></p>
                    <h1 >Adidas Men's Spain 18/19 Authentic Home Jersey Red/Bold Gold</h1>
                    <h2>$32.2</h2>
                    <div>
                    <v-btn large>  Add To Cart </v-btn>
                    </div>
                </div>
            </v-card>
        </v-flex>
        <v-flex xs1>
            <v-card>
                <v-text>xs 1</v-text>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CartModal from '@/components/CartModal.vue'
export default {
    components: {
        Navbar,
        CartModal
    }
}
</script>

<style scoped>
    p,h1,h2,h3,h4,h5 {
        text-align: left
    }
    .margintop {
        margin-top: 5%
    }
    .descProduct {
        margin-top: 3%
    }
</style>
