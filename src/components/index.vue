<template>
  <div class="full-height">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      condition: 0
    }
  },
  computed: {
    activeIndex () {
      if (this.$route.path === '/index') {
        return '/'
      }
      return this.$route.path
    }
  }
}
