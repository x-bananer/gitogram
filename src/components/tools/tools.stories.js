import tools from './tools.vue'
export default {
  title: 'Tools',
  components: { tools }
}

export const defaultView = () => ({
  components: {
    tools
  },
  template: `
    <tools />
  `
})
defaultView.story = {
  name: 'Cтандартный вид'
}
