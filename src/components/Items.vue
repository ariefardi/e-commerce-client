<template>
        <v-layout row wrap>
            <v-flex xs4 order-md2 order-xs1 v-for="(item, index) in items" :key="index" >
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
                items : [
                {
                    src : 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/mexico-russia-2018-kit.jpg?t=1525203114&_ga=2.159645112.469904727.1525201197-1373580438.1525201197'
                },
                {
                    src : 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/spain-russia-2018-kit.jpg?t=1525203115&_ga=2.4848182.469904727.1525201197-1373580438.1525201197'
                },
                {
                    src : 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/argentina-russia-2018.jpg?t=1525203995&_ga=2.193262248.469904727.1525201197-1373580438.1525201197'
                }
            ]
            }
        }
    }
</script>
<style scoped>

</style>
