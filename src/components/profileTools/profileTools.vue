<template>
  <div class="c-user-icons">
    <button class="icon user-icons__element" @click="$emit('onHome')">
      <icon name="home" />
    </button>
    <button class="icon user-icons__element" @click="$emit('onUser')">
      <img :src="source" class="user-icons__img" v-if="source">
      <icon name="avatar" v-else />
    </button>
    <button class="icon user-icons__element" @click="$emit('onLogout')">
      <icon name="exit" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'ProfileTools',
  emits: ['onHome', 'onUser', 'logout'],
  components: {
    icon
  },
  props: ['source']
}
</script>

<style lang="scss" scoped src="./profileTools.scss"></style>
