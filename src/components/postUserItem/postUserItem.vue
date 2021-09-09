<template>
  <div class="c-post-user-item" @click="$emit('оnPress')">
    <div class="user">
      <div class="user__header">
        <div class="avatar">
          <img :src="avatar" alt="userneme avatar" class="img">
        </div>
        <div class="username">{{ username }}</div>
      </div>
      <div class="user__content">
        <h2 class="user__content-framework">{{ framework }}</h2>
        <div class="user__content-desc">{{ desc }}</div>
        <ul class="tools">
          <li class="tools__item tools__item-star">
            <icon name="star" /> Star
          </li>
          <li class="tools__item tools__item-likes">
            {{ likes }}
          </li>
          <li class="tools__item tools__item-fork">
            <icon name="fork" /> Fork
          </li>
          <li class="tools__item tools__item-values">
            {{ forks }}
          </li>
        </ul>
      </div>
    </div>
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 3" :key="n">
              <!-- Будем передавать сюда комментарии в данных с сервера -->
          <comment text="Some text" username="John Doe" />
        </li>
      </ul>
    </div>
    <div class="date">
      {{ date }}
    </div>
  </div>

</template>

<script>

import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import { icon } from '../../icons'

export default {
  data () {
    return {
      shown: false
    }
  },
  components: {
    toggler,
    comment,
    icon
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    framework: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    likes: {
      type: String,
      required: true
    },
    forks: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./postUserItem.scss" lang="scss" scoped></style>
