<template>
<div class="c-comment">
  <p>
    <span class="username">{{ nickname }}</span>
    <span class="text">{{ text }}</span>
  </p>
</div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    nickname: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./comment.scss" lang="scss" scoped></style>
