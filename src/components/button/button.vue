<template>
  <button
    :class="[
    'c-button', `theme-green`,
    { 'hover-text': withHoverText },
    {'loading': loading}
    ]"
    :data-hover-text="hoverText"
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
    loading: {
      type: Boolean
    },
    isDisabled: {
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
