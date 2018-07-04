<template>
        <v-layout row>
            <v-flex xs4 order-md2 order-xs1 v-for="(item, index) in items2" :key="index" >
                <v-card dark tile flat>
                    <v-card-media >
                        <div>
                            <img :src="item.src" width="100%">
                            <v-btn> <v-icon color="grey lighten-1">shopping_cart</v-icon>  </v-btn>
                        </div>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
</template>
<script>
    export default {
        data () {
            return {
                items2 : [
                {
                    src : 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/nike-just-do-it-pack-boots.jpg?t=1526524892'
                },
                {
                    src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/puma-illuminate-pack.png?t=1528322461'
                },
                {
                    src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/adidas-energy-mode-pack-world-cup.jpg?t=1528272208'
                }
                ]
            }
        }
    }
</script>
<style scoped>

</style>
