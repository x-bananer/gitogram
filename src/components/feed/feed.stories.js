import feed from './feed.vue'

export default {
  title: 'Feed',
  component: feed
}

const template = () => ({
  components: {
    feed
  },
  data () {
    return {
      comments: [{
        username: 'John',
        comment: 'Smth'
      }]
    }
  },
  template: `
    <feed 
      :comments="comments"
    ></feed>
  `
})

export const Default = template.bind({})

Default.story = {
  name: 'Стандартный вид'
}
