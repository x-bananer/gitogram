import slideStory from './slideStory.vue'

export default {
  title: 'Slide Story',
  component: slideStory,
  argTypes: {
    onNextSlide: {
      action: 'onNextSlide',
      description: 'after button NextSlide'
    },
    onPrevSlide: {
      action: 'onPrevSlide',
      description: 'after button PrevSlide'
    },
    onProgressFinish: {
      action: 'onProgressFinish',
      description: 'after progress'
    }
  }
}

const template = (args) => ({
  components: { slideStory },
  data () {
    return {
      data: {
        id: 'id',
        username: 'John',
        userAvatar: 'https://picsum.photos/100/100'
      },
      args
    }
  },
  template: `
    <slideStory 
      :data="data"
    />
  `
})

export const DefaultView = template.bind({})

DefaultView.story = {
  name: 'Не активный'
}

const templateActiveBtnRight = (args) => ({
  components: { slideStory },
  data () {
    return {
      data: {
        id: 'id',
        username: 'John',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<h1>Some text</h1>'
      },
      activeBtns: ['next'],
      args
    }
  },
  template: `
    <slideStory 
      :data="data"
      active
      :btnsShown="activeBtns"
      @onNextSlide="args.onNextSlide"
      @onPrevSlide="args.onPrevSlide"
      @onProgressFinish="args.onProgressFinish"
    />
  `
})

export const ActiveBtnRigth = templateActiveBtnRight.bind({})

ActiveBtnRigth.story = {
  name: 'Активный с правой кнопкой'
}

const templateActiveBtnLeft = (args) => ({
  conponents: { slideStory },
  data () {
    return {
      data: {
        id: 'id',
        username: 'John',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<h1>Some text</h1>'
      },
      activeBtns: ['prev'],
      args
    }
  },
  template: `
    <slideStory 
      :data="data"
      active
      :btnsShown="activeBtns"
      @onPrevSlide="args.onPrevSlide"
      @onProgressFinish="args.onProgressFinish"
    />
  `
})

export const ActiveBtnLeft = templateActiveBtnLeft.bind({})
ActiveBtnLeft.story = {
  name: 'Активный с левой кнопкой'
}

const templateWithoutContent = (args) => ({
  components: { slideStory },
  data () {
    return {
      data: {
        id: 'id',
        username: 'John',
        userAvatar: 'https://picsum.photos/100/100',
        content: ''
      },
      args
    }
  },
  template: `
    <slideStory 
      :data="data"
    />
  `
})

export const WithoutContent = templateWithoutContent.bind({})

WithoutContent.story = {
  name: 'Не активный без контента'
}

const templateActive = (args) => ({
  components: { slideStory },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<h1>Some text</h1>'
      },
      args
    }
  },
  template: `
    <slideStory 
      :data="data"
      active
      @onNextSlide="args.onNextSlide"
      @onPrevSlide="args.onPrevSlide"
      @onProgressFinish="args.onProgressFinish"
    />
  `
})

export const Active = templateActive.bind({})

Active.story = {
  name: 'Активный'
}

const templateLoading = (args) => ({
  components: { slideStory },
  data () {
    return {
      data: {
        id: 'id',
        username: 'John',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<h1>Some text</h1>'
      },
      args
    }
  },
  template: `
    <slideStory
      :data="data"
      active
      loading
      btnsShown=[]
      @onProgressFinish="args.onProgressFinish"
    />
  `
})

export const Loading = templateLoading.bind({})

Loading.story = {
  name: 'Со спиннером'
}
