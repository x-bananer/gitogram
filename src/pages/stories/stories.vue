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
      <slide-story />
    </div>
  </div>
</template>

<script>
import { slideStory } from '../../components/slideStory'
import { logo } from '../../components/logo'
import { icon } from '../../icons'
export default {
  name: 'storiesMain',
  components: {
    slideStory,
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
