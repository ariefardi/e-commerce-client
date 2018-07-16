<template>
  <v-carousel class="marg" hide-delimiters>
    <v-carousel-item class="hero-image"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <div class="hero-text">
    <h1> <strong> {{item.jargon}} </strong> </h1>
    <v-icon large class="fa fa-eye"> fa fa-eye </v-icon>
  </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/adidas-energy-mode-pack-world-cup-banner.jpg?t=1528274482',
            jargon: 'adidas Energy Mode'
          },
          {
            src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/germany-russia-2018-kit.jpg?t=1528274482',
            jargon: 'Die Mannshaft'
          },
          {
            src: "https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/uruguay-russia-2018-kit.jpg?t=1528274482",
            jargon: 'La Celeste'
          },
          {
            src: 'https://cdn7.bigcommerce.com/s-35hqfrub/product_images/theme_images/colombia-russia-2018-kit.jpg?t=1528274482',
            jargon: 'Los Cafeteros'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
     font-family: "Muli",sans-serif !important;
     line-height: 70px;
     font-size: 60px;
     color: #fff;
     letter-spacing: .25px;

  }
  .marg{
    width: 100%;
  }
  .hero-image {
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;
  -webkit-filter: brightness(80%); /* Safari 6.0 - 9.0 */
    filter: brightness(80%);
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
.fa {
  font-size: inherit;
  text-rendering: auto;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 25px 25px 25px 25px
}
</style>
