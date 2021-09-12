<template>
  <div class="topline">
    <topline>
      <template #headline>
        <!-- Здесь вместо заголовка нужно вставить svg-логотип gitogram? Это отдельный компонент? -->
        <icon name="logo" />
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
          <li class="stories__item" v-for="story in items" :key="story.id">
            <story-user-item
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              @handlePress="onPress(story.id)"
            >
              <!-- В реальном приложении будем передавать сюда данные с сервера -->
            </story-user-item>
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="container">
    <div class="posts" v-for="item in items" :key="item.id">
        <post-user-item
          :avatar="item.owner.avatar_url"
          :username="item.owner.login"
          :framework="item.name"
          :desc="item.description"
          :likes="item.stargazers_count"
          :forks="item.forks_count"
          @handlePress="onPress(item.id)"
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
    },
    getItemData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks_count
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
