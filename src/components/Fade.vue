<template>
  <transition :enter-active-class="classList">
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: 'Fade',
    props: {
      animateType: {
        type: String,
        default: 'fadeIn'
      }
    },
    computed: {
      classList() {
        return `${this.animateType} animated`
      }
    }
  }
</script>

<style scoped>

</style>
