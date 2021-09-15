<template>
  <div class="c-user-icons">
    <button class="icon user-icons__element">
      <icon name="home" />
    </button>
    <button class="icon user-icons__element">
      <img class="user-icons__img" :src="src">
      <icon name="avatar" />
    </button>
    <button class="icon user-icons__element">
      <icon name="exit" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'Profile',
  emits: ['logout'],
  components: {
    icon
  },
  props: ['src']
}
</script>

<style lang="scss" scoped src="./profile.scss"></style>
