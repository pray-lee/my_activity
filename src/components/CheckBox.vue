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
  position: absolute;
  top:0;
  left:0;
  display:block;
  width: 100%;
  height: 100%;
  margin:0 auto;
}
.img_radio_box label{
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100%;
  height: 100%
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
.img_radio:checked+label::after{
  display:block;
  content: '';
  position:absolute;
  width: .8rem /* 60/75 */;
  height: .826667rem /* 62/75 */;
  background: url(../assets/images/fit_icon.png) center center no-repeat;
  background-size: .8rem .826667rem
}
</style>
