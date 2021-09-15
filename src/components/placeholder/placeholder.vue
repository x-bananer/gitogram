<template>
  <div class="c-placeholder">
    <div class="placeholder__top"></div>
    <ul class="list placeholder__list">
      <li class="list__item placeholder__item" v-for="n in paragraphs" :key="n">
        <div class="placeholder__first-paragraph"></div>
        <div class="placeholder__second-paragraph"></div>
        <div class="placeholder__third-paragraph"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    paragraphs: Number
  }
}
</script>

<style lang="scss" scoped src="./placeholder.scss"></style>
