import placeholder from './placeholder.vue'

export default {
  title: 'Placeholder',
  component: placeholder
}

const template = () => ({
  components: {
    placeholder
  },
  template: '<placeholder />'
})

export const defaultView = template.bind({})

defaultView.story = {
  name: 'Без параграфов'
}

const secondView = () => ({
  components: { placeholder },
  template: '<placeholder :paragraphs=2 />'
})

export const defaultParagraph = secondView.bind({})

defaultParagraph.story = {
  name: 'С параграфами'
}
