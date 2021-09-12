<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push('/')">
          <logo color="white" />
        </button>
        <button class="close-btn" @click="$router.push('/')">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <stories-slider />
    </div>
  </div>
</template>

<script>
import { storiesSlider } from '../../components/storiesSlider'
import { logo } from '../../components/logo'
import { icon } from '../../icons'
export default {
  name: 'storiesMain',
  components: {
    storiesSlider,
    logo,
    icon
  },
  data () {
    return []
  },
  computed: {},
  methods: {
    getStoryData (obj) {
      return {}
    }
  }
}
</script>

<style lang="scss" scoped src="./stories.scss"></style>
