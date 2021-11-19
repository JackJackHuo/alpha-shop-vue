<template>
  <main>
    <h1 class="title">結帳</h1>
    <div class="container">
      <!-- content left -->
      <div class="main__content content__left content__upper">
        <!-- stepper -->
        <Stepper :current-step="currentStep" />
        <!-- form -->
        <form action="#">
          <div class="form__content">
            <CustomerInfo v-show="currentStep === 1" />
            <Shipment 
              v-show="currentStep === 2" 
              @after-select-shipment="afterSelectShipment"
            
            />
            <Payment v-show="currentStep === 3" />
          </div>
          <div class="form__btn--control">
            <div class="btn__container">
              <button
                v-show="currentStep !== 1"
                type="submit"
                class="form__btn--previous"
                @click.stop.prevent="handlePrevBtnClicked"
              >
                &longleftarrow; 上一步
              </button>
              <button
                type="submit"
                class="form__btn--next form__btn--confirm"
                @click.stop.prevent="handleNextBtnClicked"
              >
                {{ nextBtnText }}
              </button>
            </div>
          </div>
        </form>
      </div>
      <!-- content right -->
      <div class="main__content content__right content__lower">
        <Cart 
          :initial-cart-items="cartItems"
          :expressShipment="expressShipment"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import CustomerInfo from "../components/CustomerInfo.vue";
import Shipment from "../components/Shipment.vue";
import Payment from "../components/Payment.vue";
import Cart from "../components/Cart.vue";

const dummyData = [
  {
    id: 1,
    name: '破壞補釘修身牛仔褲',
    image: '/img/Block@jean1.5b574c1f.png',
    quantity: 5,
    price:3999
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    image: '/img/Block@jean2.ca91e9b3.png',
    quantity: 3,
    price:1299
  },
]
export default {
  name: "Checkout",
  components: {
    Stepper,
    CustomerInfo,
    Shipment,
    Payment,
    Cart,
  },
  data() {
    return {
      currentStep: 1,
      cartItems: [],
      expressShipment: false
    }
  },
  created() {
    this.fetchCartData()
  },
  methods: {
    fetchCartData() {
      this.cartItems = [...dummyData]
    },
    handlePrevBtnClicked() {
      this.currentStep = this.currentStep - 1
    },
    handleNextBtnClicked() {
      if(this.currentStep === 3 ) return 
      this.currentStep = this.currentStep + 1
    },
    afterSelectShipment(payload) {
      console.log(payload)
      this.expressShipment = payload === 'express'?  true : false    
      } 
  },
  computed: {
    nextBtnText() {
      if( this.currentStep === 3 ){
        return  '確認下單'
      }else{
        return '下一步'
      }
    }
  }
};
</script>