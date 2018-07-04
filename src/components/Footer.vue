<template>
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
                   src: 'https://cdn.freebiesupply.com/logos/large/2x/vans-3-logo-png-transparent.png'
               },
               {
                   src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png'
               },
               
            ]
        }
    }
}
    
</script>
<style scoped>

</style>


