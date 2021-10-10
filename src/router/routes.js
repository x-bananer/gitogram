import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { profile } from '../pages/profile'
import { follow } from '../pages/follow'

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
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  },
  {
    path: '/profile',
    component: profile,
    name: 'profile'
  },
  {
    path: '/follow',
    component: follow,
    name: 'follow'
  }
]
