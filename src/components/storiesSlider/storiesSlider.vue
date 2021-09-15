<template>
  <div class="c-stories-slider">
    <div class="c-stories-slider__container">
      <ul class="stories" ref="slider">
        <li
          class="stories__item"
          v-for="(trending, ndx) in trendings"
          :key="trending.id"
          ref="item"
        >
          <slideStory
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :btnsShown="activeBtns"
            @onNextSlide='handleSlide(ndx + 1)'
            @onPrevSlide='handleSlide(ndx - 1)'
            @onProgressFinish='handleSlideOnProgressFinish(ndx + 1)'
           />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import slideStory from '../slideStory/slideStory.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'storiesSlider',
  components: {
    slideStory
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.data
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchReadme: 'fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item).getPropertyValue('width'),
        10
      )
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    },
    async handleSlideOnProgressFinish (slideNdx) {
      if (this.trendings.length !== slideNdx) {
        this.moveSlider(slideNdx)
        await this.loadReadme()
      }
    }
  },
  async mounted () {
    if (this.initialSlider) {
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlider
      )
      await this.handleSlide(ndx)
    }
    if (!this.trendings.length) {
      await this.fetchTrendings()
    }
    await this.loadReadme()
  }
}
</script>
