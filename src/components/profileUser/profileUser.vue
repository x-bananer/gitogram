<template>
  <div class="c-nickname">
    <div class="nickname__avatar">
      <img :src="source" class="nickname__img" />
    </div>
    <div class="nickname__content">
      <div class="nickname__name">
        {{ name }}
      </div>
      <div class="nickname__loading" v-if="loading"></div>
      <div class="nickname__data" v-else>
        <div class="col">
          <div class="col__count">{{ repCount ? repCount : 0 }}</div>
          <div class="col__name">
            <button
              class="col__button"
              :class="isActive ? 'active' : ''"
              @click="$emit('onClickReposts')"
            >
              Reposts
            </button>
          </div>
        </div>
        <div class="col">
          <div class="col__count">{{ watchCount ? watchCount : 0 }}</div>
          <div class="col__name">
            <button
              class="col__button"
              :class="isActive ? '' : 'active'"
              @click="$emit('onClickWatches')"
            >
              Watches
            </button>
          </div>
        </div>
      </div>
      <div class="nickname__realName">
        {{ realName }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['name', 'source', 'repCount', 'watchCount', 'realName', 'isActive', 'loading']
}

</script>

<style lang="scss" scoped src="./profileUser.scss">
</style>
