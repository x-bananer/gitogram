<template>
  <button
    :class="['c-button', `theme-green`, { 'hover-text': withHoverText }]"
    :data-hover-text="hoverText"
  >
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}

</script>
 <style lang="scss" scoped src="./button.scss"></style>
