<template>
  <div class="container" @click="showToast">
    我是首页
  </div>
</template>

<script>
import mptoast from 'mptoast'
export default {
  components: {
    mptoast
  },
  data () {
    return {}
  },
  methods: {
    showToast () {
      this.$mptoast('我是提示信息')
    }
  },

  created () {}
}
</script>

<style scoped>
</style>
