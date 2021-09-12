import topline from './topline'

export default {
  title: 'Topline',
  components: {
    topline
  }
}

export const defaultView = () => ({
  components: {
    topline
  },
  // eslint-disable-next-line quotes
  template: `
    <topline>
      <template #headline>
      </template>
      <template #content>
      </template>
    </topline>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
