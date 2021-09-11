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
        <p> One </p>
      </template>
      <template #content>
        <p> Two </p>
      </template>
    </topline>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
