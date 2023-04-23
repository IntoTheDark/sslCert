<template>
  <div id="app">
    <div ref="vantaRef" style="width:100%;height:100vh"></div>
    <router-view class="my_title"/>
  </div>
</template>
<script>
import * as THREE from 'three'
import NET from 'vanta/src/vanta.globe'

export default {
  name: 'App',
  mounted () {
    this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
    // eslint-disable-next-line no-undef
    this.vantaEffect.setOptions({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x2299ee,
      color2: 0x909399,
      backgroundColor: 0x1c1720,
      size: 2.00
    })
  },
  beforeDestroy () {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>

<style>
.my_title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
