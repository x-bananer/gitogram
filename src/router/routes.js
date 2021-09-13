import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'

export default [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories',
    component: stories,
    name: 'stories'
  }
]
