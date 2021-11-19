<template>
  <div class="cart">
    <h3 class="cart__title d-none">購物籃</h3>
    <div class="cart__items">
      <div v-for="cartItem in cartItems" :key="cartItem.id" class="cart__item">
        <img :src="cartItem.image" alt="" class="cart__item--img" />
        <div class="cart__item--content">
          <div class="cart__item--info">
            <span class="item__name">{{ cartItem.name }}</span>
            <div class="item__quantity">
              <div
                class="item__quantity--btn item__quantity--minus"
                @click.stop.prevent="handleMinusBtnClicked(cartItem.id)"
              ></div>
              <span class="item__quantity--number">{{
                cartItem.quantity
              }}</span>
              <div
                class="item__quantity--btn item__quantity--plus"
                data-id="1"
                @click.stop.prevent="handlePlusBtnClicked(cartItem.id)"
              ></div>
            </div>
          </div>
          <span class="item__price">${{ cartItem.price | showPrice }} </span>
        </div>
      </div>
    </div>
    <div class="cart__charge">
      <div class="cart__shipping">
        <div class="cart__charge--title">運費</div>
        <div class="cart__charge--content">{{ shipmentType }}</div>
      </div>
      <div class="cart__total">
        <div class="cart__charge--title">小計</div>
        <div class="cart__charge--content cart__charge--total">
          ${{ totalPrice | showPrice }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    initialCartItems: {
      type: Array,
      default: () => {
        return [
          {
            name: "-",
            image: "-",
            quantity: 0,
            price: 0,
          },
        ];
      },
    },
    expressShipment: {
      type:Boolean,
      required: true
    }
  },
  data() {
    return {
      cartItems: this.initialCartItems
    }
  },
  filters: {
    showPrice(number) {   
      const numArr =  number.toString().split('') 
      if(number > 1000 ) numArr.splice(-3 , 0 , ',')
      if(number > 1000000 ) numArr.splice(-7 , 0 , ',')
      return numArr.join('')

    }
  },
  methods: {
    handlePlusBtnClicked(cartItemId) {
      this.cartItems = this.cartItems.map( cartItem => {
        if( cartItem.id === cartItemId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        }else{
          return cartItem
        }
      })
    },
    handleMinusBtnClicked(cartItemId) {
      this.cartItems = this.cartItems.map( cartItem => {
        if( cartItem.id === cartItemId && cartItem.quantity > 0) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        }else{
          return cartItem
        }
      })
    },
  },
  computed: {
    totalPrice() {
      let price = 0
      let quantity = 0
      this.cartItems.forEach( item => {
        price = price + item.quantity * item.price
        quantity = quantity + item.quantity
      })
      return this.expressShipment && quantity > 0 ? price + 500 : price     
    },
    shipmentType() {
      if ( this.expressShipment && this.totalPrice > 0) {
        return '$500'
      }else {
        return '免費'
      }
    }
  } 
};
</script>
