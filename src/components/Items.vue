<template>
        <v-layout row wrap>
            <v-flex xs4 order-md2 order-xs1 v-for="(item, index) in items" :key="index" >
                <v-card dark tile flat>
                    <v-card-media >
                        <div class="container">
                            <img :src="item.src" class="image">
                            <div class="middle">
                                <h3>Russia 2018</h3>
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
    .container {
        position: relative;
        height: 385.77px;
        width: 400px;
    }
    .image {
        opacity: 1;
        display: block;
        height: 385.77;
        width: 460px;
        transition: .5s ease;
        backface-visibility: hidden
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
