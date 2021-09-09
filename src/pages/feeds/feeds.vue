<template>
  <div class="topline">
    <topline>
      <template #headline>
        <!-- Здесь вместо заголовка нужно вставить svg-логотип gitogram? Это отдельный компонент? -->
        <h1>Gitogram /</h1>
        <div class="icons">
          <div class="icon">
            <icon name="home" />
          </div>
          <div class="icon">
            <icon name="avatar" />
            <!-- Здесь нужно динамично добавлять аватар пользоваля -->
          </div>
          <div class="icon">
            <icon name="exit" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            >
              <!-- В реальном приложении будем передавать сюда данные с сервера -->
            </story-user-item>
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="container">
    <div class="posts" v-for="post in posts" :key="post.id">
        <post-user-item
          :avatar="post.avatar"
          :username="post.username"
          :framework="post.framework"
          :desc="post.desc"
          :likes="post.likes"
          :forks="post.forks"
          :date="post.date"
          @onPress="handlePress(post.id)"
        >
          <!-- В реальном приложении будем передавать сюда данные с сервера -->
        </post-user-item>
    </div>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import posts from './userData.json'
import { postUserItem } from '../../components/postUserItem'

import * as api from '../../api'

export default {
  name: 'feeds',
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    topline,
    icon,
    storyUserItem,
    postUserItem
  },
  data () {
    return {
      stories,
      posts,
      items: []
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
