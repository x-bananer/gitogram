import postUserItem from './postUserItem.vue'
import comment from '../comment'
import toggler from '../toggler'
import icon from '../../icons'
import posts from '../../pages/feeds/userData.json'

export default {
  title: 'Post User Item',
  components: {
    postUserItem,
    icon,
    comment,
    toggler,
    posts
  }
}

export const defaultView = () => ({
  components: {
    postUserItem,
    icon,
    comment,
    toggler,
    posts
  },
  template: `
    <post-user-item>
    </post-user-item>
  `
})
