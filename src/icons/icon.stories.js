import { icon } from './../icons'

export default {
  title: 'Icons',
  components: {
    icon
  }
}

export const homeView = () => ({
  components: { icon },
  template: `
    <icon name='home'>
  `
})

homeView.story = {
  name: 'Домой'
}

export const avatarView = () => ({
  components: { icon },
  template: `
    <icon name='avatar'>
  `
})

avatarView.story = {
  name: 'Аватар'
}

export const exitView = () => ({
  components: { icon },
  template: `
    <icon name='exit'>
  `
})

exitView.story = {
  name: 'Выход'
}

export const forkView = () => ({
  components: { icon },
  template: `
    <icon name='fork'>
  `
})

forkView.story = {
  name: 'Форк'
}

export const starView = () => ({
  components: { icon },
  template: `
    <icon name='star'>
  `
})

starView.story = {
  name: 'Звезда'
}

export const triangleView = () => ({
  components: { icon },
  template: `
    <icon name="triangle" />
  `
})

triangleView.story = {
  name: 'Треугольник'
}

export const closeView = () => ({
  components: { icon },
  template: `
    <icon name='close'>
  `
})

closeView.story = {
  name: 'Закрыть'
}

export const logoView = () => ({
  components: { icon },
  template: `
    <icon name='logo'>
  `
})

logoView.story = {
  name: 'Логотип'
}

export const arrowView = () => ({
  components: { icon },
  template: `
    <icon name='arrow'>
  `
})

arrowView.story = {
  name: 'Стрелка'
}

export const loadingView = () => ({
  components: { icon },
  template: `
    <icon name='loading'>
  `
})

loadingView.story = {
  name: 'Загрузка'
}

export const authView = () => ({
  components: { icon },
  template: `
    <icon name='auth'>
  `
})

authView.story = {
  name: 'Авторизация'
}
