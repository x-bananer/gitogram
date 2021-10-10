<template>
  <button
    :class="[
      'c-button', theme,
      { 'hover-text': withHoverText },
      { 'loading': loading },
      {'small': isSmall},
    ]"
    :data-hover-text="hoverText"
    :disabled="isDisabled"
    @click="$emit('onClick')"
  >
    <div class="button__loading" v-if="loading">
      <spinner />
    </div>
    <span class="btn-text" v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script>

import spinner from '../spinner/spinner.vue'

export default {
  name: 'Button',
  components: {
    spinner
  },
  props: {
    hoverText: {
      type: String
    },
    theme: {
      type: String
    },
    loading: {
      type: Boolean
    },
    isDisabled: {
      type: Boolean
    },
    isSmall: {
      type: Boolean
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
