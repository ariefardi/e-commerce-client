<template>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4 order-md4 order-sm12 v-for="(item, index) in items2" :key="index" >
                <v-card dark tile flat>
                    <v-card-media >
                        <div class="container" >
                            <img :src="item.src" class="image">
                            <div class="middle">
                                <h3 class="jargon"> {{item.jargon}} </h3>
                            </div>
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
                    src : 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/nike-just-do-it-pack-boots.jpg?t=1526524892',
                    jargon: 'JUST DO IT'
                },
                {
                    src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/puma-illuminate-pack.png?t=1528322461',
                    jargon : 'NEW LEVEL'
                },
                {
                    src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/uploaded_images/adidas-energy-mode-pack-world-cup.jpg?t=1528272208',
                    jargon : 'ENERGY MODE'
                }
                ]
            }
        }
    }
</script>
<style scoped>
.container {
        position: relative;
        padding: 0px;
    }
    .jargon {
        font-weight: 700;
        font-size: 24px;
    }
    .image {
        opacity: 1;
        display: block;
        transition: .5s ease;
        backface-visibility: hidden;
        width: 103%;
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
    .container:hover .image {
        opacity: 0.3;
        margin-left: -20px
    }

    .container:hover .middle {
        opacity: 1;
    }
</style>
