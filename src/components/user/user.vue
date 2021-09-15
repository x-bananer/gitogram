<template>
  <div class="c-user">
    <div class="user__avatar">
      <img :src="src" class="user__img">
    </div>
    <div class="user__name">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'src']
}
</script>

<style lang="scss" scoped src="./user.scss"></style>
