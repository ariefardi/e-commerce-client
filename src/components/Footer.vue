<template>
<v-container fluid style="padding:0">
    <v-layout>
        <v-flex xs4 order-md3 order-xs2 v-for="(item, index) in imgs" :key="index">
            <v-card dark tile flat color="yellow" >
            <v-avatar
          :tile="tile"
          :size="200"
          color="yellow"
        >
          <img :src="item.src" alt="avatar">
        </v-avatar>
        </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>

export default {
    data () {
        return {
            tile: true,
            imgs: [
               {
                   src: 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f8.png'
               },
               {
                   src: 'http://pngimg.com/uploads/adidas/adidas_PNG17.png'
               },
               {
                   src: 'https://clipart.info/images/ccovers/1496248997cr-7-cristiano-ronaldo-logo-png.png'
               },
               
            ]
        }
    }
}
    
</script>
<style scoped>

</style>


