import profile from './profile.vue'

export default {
  title: 'Profile',
  components: { profile }
}

export const defaultView = () => ({
  components: {
    profile
  },
  template: `
    <profile />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
