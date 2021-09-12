import slideStory from './slideStory.vue'

export default {
  title: 'Slide Story',
  components: { slideStory }
}

export const defaultView = () => ({
  components: {
    slideStory
  },
  template: `
     <slideStory 
     />
   `
})

defaultView.story = {
  name: 'Стандартный вид'
}
