import comment from './comment.vue'

export default {
  title: 'Comment',
  components: {
    comment
  }
}

export const defaultView = () => ({
  components: {
    comment
  },
  template: `
    <comment 
      username='Username'
      text='Text' 
    />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
