<template>
  <div class="c-tools">
    <ul class="tools">
      <li class="tools__item tools__item-star">
        <div class="star"><icon name="star" /></div> Star
        </li>
      <li class="tools__item tools__item-likes">
        {{ star }}
      </li>
      <li class="tools__item tools__item-fork">
        <div class="fork"><icon name="fork" /></div> Fork
        </li>
      <li class="tools__item tools__item-values">
        {{ fork }}
      </li>
    </ul>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'tools',
  props: [
    'star',
    'fork'
  ],
  components: {
    icon
  }
}

</script>

<style lang="scss" src="./tools.scss" scoped></style>
