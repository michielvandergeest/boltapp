import { Component } from 'Bolt'
import Details from '../pages/Details'
import Home from '../pages/Home'

import Colors from '../Colors'

export default Component({
  name: 'Main',
  template: {
    rect: true,
    color: Colors.gray800,
  },
  data: {
    current: 0,
  },
  router: {
    routes: {
      Home,
      Details,
    },
  },
  events: {
    active() {
      this.$router.go('Home', { reset: true })
    },
  },
  keys: {
    back() {
      this.fireAncestors('$goBack')
    },
  },
})
