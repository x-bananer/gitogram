<template>
  <div class="c-profile">
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
    </topline>
    <div class="x-container">
      <ul class="sides">
        <div class="left">
          <div class="left__content">
            <div class="left__title">My profile</div>
            <ProfileUser
              :loading="loading"
              :name="this.user.login"
              :source="this.user.avatar_url"
              :repCount="this.user.public_repos"
              :watchCount="this.starred.length"
              :realName="this.user.bio"
              @onClickWatches="$router.push({ name: 'follow' })"
              :isActive="true"
            />
          </div>
        </div>
        <div class="right">
          <div class="right__content">
            <div class="right__container-title">
              <div class="right__title">Repositories</div>
              <div
                class="right__countRepo"
                v-text="this.userRepos.length"
              ></div>
            </div>
            <div class="right__container-loading" v-if="this.loading">
              <div class="right__loading">
                <spinner />
              </div>
            </div>
            <ul class="repos__list" v-else>
              <li
                class="repos__item"
                v-for="repos in this.userRepos"
                :key="repos.id"
              >
                <div class="repo">
                  <div class="repo__title" v-text="repos.name"></div>
                  <div class="repo__text" v-text="repos.description"></div>
                  <tools
                    :star="repos.stargazers_count"
                    :fork="repos.forks_count"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import topline from '../../components/topline/topline.vue'
import logo from '../../components/logo/logo.vue'
import profileTools from '../../components/profileTools/profileTools.vue'
import tools from '../../components/tools/tools.vue'
import ProfileUser from '../../components/profileUser/profileUser.vue'
import spinner from '../../components/spinner/spinner.vue'
import { useStore } from 'vuex'
import { ref, onMounted, computed } from 'vue'
export default {
  name: 'Profile',
  components: {
    topline,
    logo,
    tools,
    profileTools,
    ProfileUser,
    spinner
  },
  setup () {
    const { dispatch, state } = useStore()
    const loading = ref(true)
    const logout = () => {
      dispatch('logout')
    }
    onMounted(() => {
      try {
        dispatch('fetchUser')
        dispatch('fetchUserRepos')
        loading.value = false
      } catch (error) {
        console.log(error)
      }
    })
    return {
      loading,
      starred: computed(() => state.likedOfMe),
      user: computed(() => state.user),
      userRepos: computed(() => state.userRepos),
      logout
    }
  }
}
</script>

 <style src="./profile.scss" lang="scss" scoped></style>
