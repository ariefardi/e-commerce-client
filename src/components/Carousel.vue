<template>
  <v-carousel class="marg">
    <v-carousel-item class="jum"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/adidas-energy-mode-pack-world-cup-banner.jpg?t=1528274482'
          },
          {
            src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/germany-russia-2018-kit.jpg?t=1528274482'
          },
          {
            src: "https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/uruguay-russia-2018-kit.jpg?t=1528274482"  
          },
          {
            src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/colombia-russia-2018-kit.jpg?t=1528274482'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .marg{
    margin-left: -29px;
    margin-right: -50px;
    width: 1900px
  }
  .jum{
    width: 1700px
  }
</style>
