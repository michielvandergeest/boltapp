import { Component } from 'Bolt'
import Colors from '../Colors'

export default Component({
  name: 'Splash',
  template: {
    color: Colors.transparent,
    Logo: {
      mount: 0.5,
      x: w => w / 2,
      y: y => y / 3,
      src: './assets/logo.png',
    },
    Label: {
      color: Colors.gray800,
      mount: 0.5,
      x: w => w / 2,
      y: y => y / 2,
      alpha: 0.001,
      text: {
        text: 'Click OK to continue',
        fontSize: 50,
      },
    },
  },
  events: {
    active() {
      this.tag('Label').setSmooth('alpha', 1, { delay: 0.5, duration: 1.5 })
    },
  },
  keys: {
    enter() {
      this.fireAncestors('$goTo', 'Main')
    },
  },
})
