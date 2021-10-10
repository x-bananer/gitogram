import profileTools from './profileTools.vue'

export default {
  title: 'ProfileTools',
  components: { profileTools }
}

export const defaultView = () => ({
  components: {
    profileTools
  },
  template: `
    <profileTools />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
