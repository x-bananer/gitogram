import column from './column.vue'

export default {
  title: 'Column',
  component: {
    column
  }
}

const template = () => ({
  components: {
    column
  },
  data () {
    return {
      comments: [{
        username: 'John Dow',
        comment: 'Some Text'
      }]
    }
  },
  template: `
    <column
    username="John Dow"
    path="https://picsum.photos/100/100"
    :comments="comments"
    >
      <template #description>
        <h1>Some description</h1>
      </template>
    </column>
  `
})

export const defaultView = template.bind({})

defaultView.story = {
  name: 'Стандартный вид'
}
