<template>
  <div class="part">
    <h2 class="form__title">運送方式</h2>
    <div class="inputs__wrapper">
      <input
        v-model="shipment"
        type="radio"
        name="shipping-type"
        id="input__shipping--standard"
        class="form__control"
        value="standard"
      />
      <div class="form__group">
        <label for="input__shipping--standard">
          <span class="shipping__type">標準運送</span>
          <span class="shipping__time">約3~7個工作天</span>
        </label>
        <span class="shipping__cost">免費</span>
      </div>
      <input
        v-model="shipment"
        type="radio"
        name="shipping-type"
        id="input__shipping--express"
        class="form__control"
        value="express"
      />
      <div class="form__group">
        <label for="input__shipping--express">
          <span class="shipping__type">DHL 貨運</span>
          <span class="shipping__time">48小時內送達</span>
        </label>
        <span class="shipping__cost">$500</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Shipment',
  data() {
    return {
      shipment: ''
    }
  },
  watch: {
    shipment() {
      this.$emit( "after-select-shipment" , this.shipment)
    }
  }
}
</script>