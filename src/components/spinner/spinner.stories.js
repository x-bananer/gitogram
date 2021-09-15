import spinner from './spinner.vue'

export default {
  title: 'Spinner',
  components: { spinner }
}

export const defaultView = () => ({
  components: {
    spinner
  },
  template: `
    <spinner />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
