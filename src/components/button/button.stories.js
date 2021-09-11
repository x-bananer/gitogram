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
  components: { xButon: button },
  data () {
    return { args }
  },
  template: `
    <button v-bind='args'>Follow<button>
  `
})

export const Default = template.bind({})

Default.args = {
  hoverText: 'Unfollow'
}
