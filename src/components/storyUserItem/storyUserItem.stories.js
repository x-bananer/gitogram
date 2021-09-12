import storyUserItem from './storyUserItem.vue'

export default {
  title: 'Story User Item',
  components: {
    storyUserItem
  },
  argTypes: {
    onPress: {
      action: 'onPress',
      description: 'after press'
    }
  }
}

export const defaultView = (args) => ({
  components: {
    storyUserItem
  },
  data () {
    return {
      args
    }
  },
  template: `
    <storyUserItem 
      avatar="https://picsum.photos/100/100"
      username="Username"
      @onPress="args.onPress"
    />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
