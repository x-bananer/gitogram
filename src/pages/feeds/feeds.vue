<template>
  <div class="topline">
    <topline>
      <template #headline>
        <logo color='black'></logo>
        <div class="topline__user-icons">
          <profileTools
            :source="this.user?.avatar_url"
            @onLogout="logout"
            @onUser="$router.push({name: 'profile'})"
            @onHome="$router.push({name: 'feeds'})"
          ></profileTools>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in getUnstarredOnly" :key="story.id">
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
    <li class="columns-item" v-for="repos in this.starred" :key="repos.id">
      <column
        :nick="repos.owner.login"
        :path="repos.owner.avatar_url"
        :comments="repos.issuesList"
        @toggleIssues='toggleIssues(repos, $event)'
        :date="repos.updated_at"
      >
        <template #description>
          <div class="column__content">
            <div class="column__title" v-text="repos.name"></div>
            <div class="column__description" v-text="repos.description"></div>
            <div class="column__tools">
              <tools
                :star="repos.stargazers_count"
                :fork="repos.forks_count"
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
import { profileTools } from '../../components/profileTools'
import { column } from '../../components/column'
import { tools } from '../../components/tools'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Feeds',
  components: {
    topline,
    storyUserItem,
    logo,
    profileTools,
    column,
    tools
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.data,
      starred: state => state.likedOfMe,
      user: state => state.user
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchLikedOfMe: 'fetchLikedOfMe',
      fetchUser: 'fetchUser',
      logout: 'logout',
      fetchIssue: 'fetchIssue'
    }),
    getData (repos) {
      return {
        title: repos.name,
        description: repos.description,
        username: repos.owner.login,
        stars: repos.stargazers_count,
        date: repos.updated_at
      }
    },
    async toggleIssues (repos, event) {
      if (event && !Object.prototype.hasOwnProperty.call(repos, 'issuesList')) {
        try {
          await this.fetchIssue({ id: repos.id, owner: repos.owner.login, repo: repos.name })
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  async created () {
    try {
      if (!this.trendings.length) {
        await this.fetchTrendings()
      }
      await this.fetchLikedOfMe()
    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style lang="scss" scoped src="./feeds.scss"></style>
