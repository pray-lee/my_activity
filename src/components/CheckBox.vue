<template>
    <div class="img_radio_box">
        <input type="radio" :id="value" class="img_radio" :value="value" :checked="checked" :name="name" @change="$emit('change', value)">
        <label :for="value"></label>
    </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props:['value', 'checked', 'name'],
  }
</script>

<style scoped>
.img_radio_box{
  position: relative;
  display:block;
  width: .64rem /* 24/37.5 */;
  height: .64rem /* 24/37.5 */;
  margin:0 auto;
}
.img_radio_box label{
  position:absolute;
  top:0;
  left:0;
  display:block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/choose_icon.png) center center no-repeat;
  background-size: cover
}
.img_radio{
  position:absolute;
  left:0;
  top:0;
  opacity:0;
  -webkit-appearance: none;
  width:100%;
  height: 100%;
}
.img_radio:checked+label{
  background:none;
  border:1px solid #000;
  border-radius: 50%;
}
.img_radio:checked+label::after{
  display:block;
  content: '';
  position:absolute;
  top:-.25rem;
  left:0;
  width:1.0666667rem;
  height: .858667rem;
  background: url(../assets/images/fit_icon.png) center center no-repeat;
  background-size: 1.066667rem /* 40/37.5 */ .858667rem /* 32.2/37.5 */;
}
</style>
