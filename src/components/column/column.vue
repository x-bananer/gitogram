<template>
  <div class="c-column">
    <div class="column__container">
      <div class="column__user">
        <user :name="nick" :source="path"></user>
      </div>
      <div class="column__description">
        <slot name="description" />
      </div>
      <div class="column__feed">
        <feed :comments="comments" @toggleIssues="toggle"></feed>
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
  props: ['nick', 'path', 'comments', 'date'],
  emits: ['toggleIssues'],
  components: {
    user,
    feed
  },
  methods: {
    toggle (isOpen) {
      this.$emit('toggleIssues', isOpen)
    }
  }
}
</script>

<style lang="scss" scoped src="./column.scss"></style>
