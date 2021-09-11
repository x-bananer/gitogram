import toggler from './toggler.vue'

export default {
  title: 'Toggler',
  components: {
    toggler
  },
  argTypes: {
    onToggle: {
      action: 'onToggle',
      description: 'after onToggle'
    }
  }
}

const template = (args) => ({
  components: { toggler },
  data () {
    return { args }
  },
  template: `
    <toggler 
      @onToggle="args.onToggle" 
    />
  `
})

export const Default = template.bind({})

Default.story = {
  name: 'Toggler'
}
