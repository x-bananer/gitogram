<template>
  <div class="c-spinner">
    <icon name="loading" />
  </div>
</template>

<script>
import { icon } from '../../icons/'
export default {
  name: 'Spinner',
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped src="./spinner.scss"></style>
