import { Component } from 'Bolt'
import Carousel from '../components/Carousel'

import Colors from '../Colors'

export default Component({
  debug: true,
  name: 'Main',
  template: {
    color: Colors.gray800,
  },
  data: {
    current: 0,
    categories: [],
  },
  events: {
    active() {
      if (this.params.reset === true) {
        this.data.current = 0
        this.data.categories = []
        fetch('./assets/categories.json')
          .then(response => response.json())
          .then(categories => (this.data.categories = categories))
      }
    },
  },
  watch: {
    categories(val) {
      this.children = val.map((category, index) => {
        return Carousel({
          data: {
            title: category.title,
            items: category.items,
            index,
            action: item => {
              this.fireAncestors('$goTo', 'Details', item)
            },
          },
        })
      })
      this.refocus()
    },
  },
  keys: {
    up() {
      this.data.current = Math.max(this.data.current - 1, 0)
    },
    down() {
      this.data.current = Math.min(this.data.current + 1, this.children.length - 1)
    },
    back() {
      this.fireAncestors('$goTo', 'Splash')
    },
  },
  delegateFocus() {
    return this.children[this.data.current]
  },
})
