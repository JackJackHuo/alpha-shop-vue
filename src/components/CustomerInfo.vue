<template>
  <div class="part">
    <h2 class="form__title">寄送地址</h2>
    <div class="inputs__wrapper">
      <div class="form__group">
        <label for="form__input--gender">稱謂</label>
        <select name="gender" id="input__info--gender" class="form__control">
          <option value="male" selected>先生</option>
          <option value="female">小姐</option>
        </select>
      </div>
      <div class="form__group">
        <label for="form__input--name">姓名</label>
        <input
          type="text"
          name="name"
          id="input__info--name"
          class="form__control"
          placeholder="請輸入姓名"
        />
      </div>
      <div class="form__group">
        <label for="form__input--phone">電話</label>
        <input
          type="text"
          name="phone"
          id="input__info--phone"
          class="form__control"
          placeholder="請輸入行動電話"
        />
      </div>
      <div class="form__group">
        <label for="form__input--email">Email</label>
        <input
          type="text"
          name="email"
          id="input__info--email"
          class="form__control"
          placeholder="請輸入電子郵件"
        />
      </div>
      <div class="form__group">
        <label for="form__input--city">縣市</label>
        <select name="city" id="input__info--city" class="form__control">
          <option value="" disabled selected>請選擇縣市</option>
          <option value="">基隆市</option>
          <option value="">台北市</option>
          <option value="">新北市</option>
          <option value="">桃園市</option>
          <option value="">新竹市</option>
          <option value="">新竹縣</option>
          <option value="">苗栗市</option>
          <option value="">台中縣</option>
          <option value="">彰化縣</option>
          <option value="">南投縣</option>
          <option value="">雲林縣</option>
          <option value="">嘉義市</option>
          <option value="">嘉義縣</option>
          <option value="">台南市</option>
          <option value="">高雄市</option>
          <option value="">屏東縣</option>
          <option value="">台東縣</option>
          <option value="">花蓮縣</option>
          <option value="">宜蘭縣</option>
          <option value="">澎湖縣</option>
          <option value="">金門縣</option>
          <option value="">連江縣</option>
        </select>
      </div>
      <div class="form__group">
        <label for="form__input--address">地址</label>
        <input
          type="text"
          name="address"
          id="input__info--address"
          class="form__control"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  </div> 
</template>