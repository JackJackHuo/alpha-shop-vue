<template>
  <div class="stepper">
    <div :class="[ 'step' , { active: currentStep === 1 } , {checked: currentStep > 1}]">
      <div class="circle__container"></div>
      <div class="label__container">寄送地址</div>
    </div>
    <div :class="[ 'step' , { active: currentStep === 2 } , {checked: currentStep > 2}]">
      <div class="circle__container"></div>
      <span class="connect__line"></span>
      <div class="label__container">運送方式</div>
    </div>
    <div :class="[ 'step' , { active: currentStep === 3 }]">
      <div class="circle__container"></div>
      <span class="connect__line"></span>
      <div class="label__container">付款資訊</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  }
}
</script>