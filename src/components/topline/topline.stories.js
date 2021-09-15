import topline from './topline.vue'

export default {
  title: 'Topline',
  component: topline
}

export const defaultView = () => ({
  components: {
    topline
  },
  template: `
    <topline>
      <template #headline>
        <h1>Headline</h1>
      </template>
      <template #content>
      <p>Content</p>
      </template>
    </topline>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
