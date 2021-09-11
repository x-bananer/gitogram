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

export const defaultView = () => ({
  components: {
    storyUserItem
  },
  template: `
    <storyUserItem
      avatar='https://picsum.photos/100/100'
      username='Username'
    />
  `
})

defaultView.story = {
  name: 'Non-clickable story'
}

export const ViewWithPress = (args) => ({
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

ViewWithPress.story = {
  name: 'Clickable story'
}
