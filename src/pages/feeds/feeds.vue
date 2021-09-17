<template>
  <div class="topline">
    <topline>
      <template #headline>
        <logo color='black'></logo>
        <div class="topline__user-icons">
          <profile></profile>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in this.trendings" :key="story.id">
            <storyUserItem
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              @onPress="$router.push({name: 'stories', params: {initialSlide: story.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <ul class="columns">
    <li class="columns-item" v-for="items in this.trendings" :key="items.id">
      <column
        :username="items.owner.login"
        :path="items.owner.avatar_url"
        comments=""
        :date="items.created_at"
      >
        <template #description>
          <div class="column__content">
            <div class="column__title" v-text="items.name"></div>
            <div class="column__description" v-text="items.description"></div>
            <div class="column__tools">
              <tools
                :star="items.stargazers_count"
                :fork="items.forks_count"
              />
            </div>
          </div>
        </template>
      </column>
    </li>
  </ul>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { logo } from '../../components/logo'
import { profile } from '../../components/profile'
import { column } from '../../components/column'
import { tools } from '../../components/tools'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Feeds',
  components: {
    topline,
    storyUserItem,
    logo,
    profile,
    column,
    tools
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings'
    }),
    getData (items) {
      return {
        title: items.name,
        description: items.description,
        username: items.owner.login,
        stars: items.stargazers_count,
        date: items.created_at
      }
    }
  },
  async created () {
    try {
      if (!this.trendings.length) {
        await this.fetchTrendings()
      }
    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style lang="scss" scoped src="./feeds.scss"></style>
