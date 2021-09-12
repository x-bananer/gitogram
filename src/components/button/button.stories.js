import button from './button.vue'

export default {
  title: 'Button',
  component: { button },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
     <x-button v-bind="args">Follow</x-button>
   `
})

export const DefaultView = template.bind({})

DefaultView.story = {
  name: 'Стандартный вид'
}

DefaultView.args = {
  hoverText: 'Unfollow'
}
