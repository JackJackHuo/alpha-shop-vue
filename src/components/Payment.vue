<template>
  <div class="part">
    <h2 class="form__title">付款資訊</h2>
    <div class="inputs__wrapper">
      <div class="form__group">
        <label for="input__card--name">持卡人姓名</label>
        <input
          type="text"
          name="card__name"
          id="input__card--name"
          class="form__control"
          placeholder="Jack Huo"
        />
      </div>
      <div class="form__group">
        <label for="input__card--number">卡號</label>
        <input
          type="text"
          name="card__number"
          id="input__card--number"
          class="form__control"
          placeholder="1111 2222 3333 4444"
        />
      </div>
      <div class="form__group">
        <label for="input__card--expired">有效期限</label>
        <input
          type="text"
          name="card__expried"
          id="input__card--expired"
          class="form__control"
          placeholder="MM/YY"
        />
      </div>
      <div class="form__group">
        <label for="input__card--code">CVC/CCV</label>
        <input
          type="text"
          name="card__code"
          id="input__card--code"
          class="form__control"
          placeholder="123"
        />
      </div>
    </div>
  </div>
</template>