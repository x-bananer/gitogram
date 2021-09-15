import user from './user.vue'

export default {
  title: 'User',
  components: { user }
}

export const defaultView = () => ({
  components: {
    user
  },
  template: `
    <user 
      name="Name"
      src="https://picsum.photos/100/100"
    />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
