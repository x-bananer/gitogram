<template>
<div class="icon">
      <icon name="logo" />
    </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'logo',
  components: {
    icon
  },
  props: ['color']
}
</script>

<style lang="scss" scoped src="./logo.scss"></style>
