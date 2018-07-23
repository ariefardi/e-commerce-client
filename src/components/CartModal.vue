<template>
    <v-dialog v-model="dialog" max-width="50.4%" style="min-width=10%">
      <main style="background-color:white">
        <v-container>
         <v-flex xs12 sm12 md12 >
          <div class="basket" v-for="(item, index) in cart" :key="index">
            <div class="basket-labels">
              <ul>
                <li class="item item-heading">Item</li>
                <li class="price">Price</li>
                <li class="quantity">Quantity</li>
                <li class="subtotal">Subtotal</li>
              </ul>
            </div>
            <div class="basket-product">
              <div class="item">
                <div class="product-image">
                  <img :src="item.imgSrc" alt="Placholder Image 2" class="product-frame">
                </div>
                <div class="product-details">
                  <h1> Nike Men's {{item.itemName}} 18/19 Jersey </h1>
                  <p>Product Code - {{item._id}} </p>
                </div>
              </div>
              <div class="price"> {{item.price }} </div>
              <div class="quantity">
                <p class="quantity-field" style="margin-top:-2%;margin-left:20%" > {{item.qty}}</p>
                <v-btn style="padding:0" small flat icon color="black" @click="incQty(index)"> <v-icon color="black" style="padding-bot:20%" >fa fa-plus</v-icon> </v-btn>
                <v-btn style="padding:0" small flat icon color="black" @click="decQty(index)"> <v-icon color="black">fa fa-minus</v-icon> </v-btn>
              </div>
              <div class="subtotal" > {{item.price*item.qty | filterPrice }} </div>
            </div>
          </div>
          </v-flex>
        </v-container>
        <div v-if="cart.length>0"> 
          <p style="font-size:150%"> Total:  ${{totalInCart | filterPrice }} </p>  <v-btn @click="checkout(totalInCart)" flat color="black"> <p style="margin-top:-13%"> Checkout </p> </v-btn> 
        </div>
        <div v-else >
          <h2 style="text-align:center"> No Item in Shopping Cart </h2>
        </div>
      </main>
    </v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex'
 export default {
    computed: {
      dialog: {
        get () {
          return this.$store.state.dialog
        },
        set () {
          this.$store.commit('setDialog', false)
        }
      },
      ...mapState([
        'cart','totalInCart'
      ])
    },
    methods: {
      ...mapActions([
        'incQty','decQty','checkout'
      ])
    },
    filters: {
      filterPrice (value) {
        let hasil = value.toString().slice(0,5)
        hasil = Number(hasil)
        return hasil
      }
    }
  }
</script>

<style scoped>
@charset "utf-8";

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600);

a {
  border: 0 none;
  outline: 0;
  text-decoration: none;
}

strong {
  font-weight: bold;
}

p {
  margin: 0.75rem 0 0;
}

h1 {
  font-size: 0.75rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

img,
.basket-module,
.basket-labels,
.basket-product {
  width: 100%;
}

.basket,
.basket-module,
.basket-labels,
.item,
.price,
.quantity,
.subtotal,
.basket-product,
.product-image,
.product-details {
  float: left;
}

.price:before,
.subtotal:before,
.subtotal-value:before,
.total-value:before,
.promo-value:before {
  content: '$';
}

.hide {
  display: none;
}

main {
  clear: both;
  font-size: 0.75rem;
  margin: 0 auto;
  overflow: hidden;
  padding: 1rem 0;
  width: 960px;
}

.basket,
aside {
  padding: 0 1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket {
  width: 70%;
}

.basket-module {
  color: #111;
}

label {
  display: block;
  margin-bottom: 0.3125rem;
}

.basket-labels {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 1.625rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  color: #111;
  display: inline-block;
  padding: 0.625rem 0;
}

li.price:before,
li.subtotal:before {
  content: '';
}

.item {
  width: 55%;
}

.price,
.quantity,
.subtotal {
  width: 15%;
}

.subtotal {
  text-align: right;
}

.item-heading {
  padding-left: 4.375rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket-product {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  position: relative;
}

.product-image {
  width: 35%;
}

.product-details {
  width: 65%;
}

.product-frame {
  border: 1px solid #aaa;
}

.product-details {
  padding: 0 1.5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.quantity-field {
  background-color: #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 0.625rem;
  padding: 2px;
  width: 3.75rem;
}

.summary {
  background-color: #eee;
  border: 1px solid #aaa;
  padding: 1rem;
  position: fixed;
  width: 250px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.summary-total-items {
  color: #666;
  font-size: 0.875rem;
  text-align: center;
}

.summary-subtotal,
.summary-total {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  clear: both;
  margin: 1rem 0;
  overflow: hidden;
  padding: 0.5rem 0;
}

.subtotal-title,
.subtotal-value,
.total-title,
.total-value,
.promo-title,
.promo-value {
  color: #111;
  float: left;
  width: 50%;
}

.summary-promo {
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.promo-title {
  float: left;
  width: 70%;
}

.promo-value {
  color: #8B0000;
  float: left;
  text-align: right;
  width: 30%;
}

.subtotal-value,
.total-value {
  text-align: right;
}

.total-title {
  font-weight: bold;
  text-transform: uppercase;
}

.summary-checkout {
  display: block;
}

.checkout-cta {
  display: block;
  float: none;
  font-size: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  padding: 0.625rem 0;
  width: 100%;
}

.summary-delivery-selection {
  background-color: #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: block;
  font-size: 0.625rem;
  height: 34px;
  width: 100%;
}

@media screen and (max-width: 640px) {
  aside,
  .basket,
  .summary,
  .item, {
    width: 100%;
  }
  .basket-labels {
    display: none;
  }
  .basket-module {
    margin-bottom: 1rem;
  }
  .item {
    margin-bottom: 1rem;
  }
  .product-image {
    width: 40%;
  }
  .product-details {
    width: 60%;
  }
  .price,
  .subtotal {
    width: 33%;
  }
  .quantity {
    text-align: center;
    width: 34%;
  }
  .quantity-field {
    float: none;
  }
  .remove {
    bottom: 0;
    text-align: left;
    margin-top: 0.75rem;
    position: relative;
  }
  .summary {
    margin-top: 1.25rem;
    position: relative;
  }
}

@media screen and (min-width: 641px) and (max-width: 960px) {
  aside {
    padding: 0 1rem 0 0;
  }
  .summary {
    width: 28%;
  }
}

@media screen and (max-width: 960px) {
  main {
    width: 100%;
  }
  .product-details {
    padding: 0 1rem;
  }
}

</style>
