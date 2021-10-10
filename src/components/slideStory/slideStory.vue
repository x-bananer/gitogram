<template>
  <div class="c-slideStory" :class="{ active }">
    <div class="header">
      <div class="header__progress">
        <xProgress :active="active" @onFinish="$emit('onProgressFinish')"/>
      </div>
      <div class="header__user">
        <user :name="data.username" :source="data.userAvatar"/>
      </div>
    </div>
    <div class="content">
      <div class="content__loading" v-if="active && loading">
        <spinner />
      </div>
      <div class="content__info" v-else>
        <div v-if="data.content?.length" class="content__text" v-html="data.content"></div>
        <placeholder v-else :paragraphs=2 />
      </div>
    </div>
    <div class="footer">
      <xButton
        :theme="data.following.status ? 'gray' : 'green'"
        :loading="data.following.loading"
        @onClick="$emit(data.following.status ? 'onUnfollow' : 'onFollow', data.id)"
        hover-text="Unfollow"
      >
        {{data.following.status ? 'Unfollow' : 'Follow'}}
      </xButton>
    </div>
    <template v-if="active">
      <button
        v-if="btnsShown.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button
        v-if="btnsShown.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import progress from '../progress/progress.vue'
import user from '../user/user.vue'
import spinner from '../spinner/spinner.vue'
import placeholder from '../placeholder/placeholder.vue'
import icon from '../../icons/icon.vue'
import button from '../button/button.vue'

export default {
  name: 'SlideStory',
  components: {
    xProgress: progress,
    user,
    spinner,
    placeholder,
    icon,
    xButton: button
  },
  emits: [
    'onNextSlide',
    'onPrevSlide',
    'onProgressFinish',
    'onFollow'
  ],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      require: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped src="./slideStory.scss"></style>
