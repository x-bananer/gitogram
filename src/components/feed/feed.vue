<template>
  <div class="c-feed">
    <div class="c-feed__toggler">
      <toggler @onToggle="toggle"/>
    </div>
    <div class="comments" v-if="shown">
      <ul class="comment__list" v-if="comments">
        <li class="comment__item" v-for="(com, ndx) in comments" :key="ndx">
          <comment :text="com.comment" :username="com.nick" />
        </li>
      </ul>
      <div class="placeholder" v-else>
        <ul class="list placeholder__list">
          <li class="list__item placeholder__item placeholder__first-paragraph"></li>
          <li class="list__item placeholder__item placeholder__second-paragraph"></li>
          <li class="list__item placeholder__item placeholder__third-paragraph"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import comment from '../comment/comment.vue'
import toggler from '../toggler/toggler.vue'

export default {
  name: 'Feed',
  props: ['comments'],
  emits: ['toggleIssues'],
  components: {
    comment,
    toggler
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
      this.$emit('toggleIssues', isOpened)
    }
  }
}
</script>

<style lang="scss" src="./feed.scss" scoped></style>
