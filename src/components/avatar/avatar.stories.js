import avatar from './avatar.vue'

export default {
  title: 'Аvatar',
  components: {
    avatar
  }
}

export const profileView = () => {
  return {
    components: {
      avatar
    },
    template: `
      <avatar
        src="https://picsum.photos/300"
        type="profile"
      />
    `
  }
}

profileView.story = {
  name: 'Профиль'
}
