<template>

  <div>
      <Navbar/>
      <Carousel style="margin-bottom: 5px !important"/>

      <div id="items-wrap">
        <Items class="items1-list"/>
        <Items2 class="items2-list"/>
        <Items3 class="items3-list"/>
      </div>
      <Footer class="topmar"></Footer>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Items from '@/components/Items.vue'
import Items2 from '@/components/Items2.vue'
import Items3 from '@/components/Items3.vue'
import Carousel from '@/components/Carousel.vue'
import CartModal from '@/components/CartModal.vue'
import Footer from '@/components/Footer.vue'

export default {
  
  name: 'home',
  components: {
      Navbar,
      Items,
      Carousel,
      Items2,
      Items3,
      CartModal,
      Footer
    }
}
</script>

<style lang="scss" scoped>
.items1-list {
  margin-top: -5px;
}
.items2-list {
  margin-top: 5px
}
.topmar {
  margin-top: 100px
}
</style>
