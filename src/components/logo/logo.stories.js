import logo from './logo.vue'

export default {
  title: 'Logo',
  components: { logo }
}

export const defaultView = () => ({
  components: {
    logo
  },
  template: `
    <logo />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
