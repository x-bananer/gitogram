<template>
  <div class="c-auth">
    <div class="auth__title">
      <icon name="logo" />
    </div>
    <div class="auth__text">
      More than just one repository. This is our digital world
    </div>
    <button class="btn-auth" @click="onAuth">
      <div class="btn-auth__content">
        <div class="btn-auth__title">Authorize with github</div>
        <div class="btn-auth__icon">
          <icon name="auth" />
        </div>
      </div>
    </button>
    <div class="auth__img">
      <img src="../../images/cover.png" alt="Gitogram" class="auth__ico" />
    </div>
    <footer>
      <div class="footer__text">© Gitogram from Loftschool</div>
    </footer>
  </div>
</template>

<script>
import { icon } from '../../icons/'
import env from '../../../env'
export default {
  name: 'Auth',
  components: {
    icon
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    onAuth () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo,user')
      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch(
          'https://webdev-api.loftschool.com/github', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              clientId: env.clientId, code, clientSecret: env.clientSecret
            })
          }
        )
        const { token } = await response.json()
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>
