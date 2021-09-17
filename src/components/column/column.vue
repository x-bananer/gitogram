<template>
  <div class="c-column">
    <div class="column__container">
      <div class="column__user">
        <user :name="username" :src="path"></user>
      </div>
      <div class="column__description">
        <slot name="description" />
      </div>
      <div class="column__feed">
        <feed :comments="comments"></feed>
      </div>
      <div class="column__date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
import user from '../user/user.vue'
import feed from '../feed/feed.vue'

export default {
  name: 'Column',
  props: ['username', 'path', 'comments', 'date'],
  components: {
    user,
    feed
  }
}
</script>

<style lang="scss" scoped src="./column.scss"></style>
