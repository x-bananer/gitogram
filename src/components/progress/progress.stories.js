import progress from './progress.vue'

export default {
  title: 'Progress',
  component: progress,
  argTypes: {
    onFinish: {
      actioin: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: '<x-progress @onFinish="args.onFinish" active />'
})

export const DefaultView = template.bind({})

DefaultView.story = {
  name: 'Стандартный вид'
}
