<template>
  <div class="c-stories">
    <header class="header">
      <div class="x-container header__section">
        <button class="logo" @click="$router.push('/')">
          <logo color="white" />
        </button>
        <button class="close-btn" @click="$router.push('/')">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <storiesSlider :initialSlider="Number($route.params.initialSlide)" />
    </div>
  </div>
</template>

<script>
import { storiesSlider } from '../../components/storiesSlider'
import { logo } from '../../components/logo'
import { icon } from '../../icons'
export default {
  name: 'stories',
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
