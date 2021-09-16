<template>
  <div :class="active && finish ? 'active' : ''" class="c-progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {
      finish: false
    }
  },
  emits: ['onPtogressFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onPtogressFinish')
    }
  },
  props: {
    active: Boolean
  },
  mounted () {
    this.$nextTick(() => {
      this.finish = true
    })

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang='scss' src='./progress.scss' scoped></style>
