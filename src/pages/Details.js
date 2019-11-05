import { Component } from 'Bolt'
import Colors from '../Colors'

export default Component({
  name: 'Details',
  template: {
    color: Colors.transparent,
    Bg: {
      src: './assets/bg.png',
      w: w => w,
      h: h => h,
    },
    Label: {
      mount: 0.5,
      x: w => w / 2,
      y: y => y / 2.5,
      text: {
        text: null,
        fontSize: 100,
        fontFace: 'RalewayBold',
      },
    },
    Notice: {
      mount: 0.5,
      x: w => w / 2,
      y: y => y / 2,
      text: {
        text: 'Click BACK to go back',
        fontSize: 28,
        fontFace: 'Raleway',
      },
    },
  },
  data: {
    name: null,
  },
  events: {
    active() {
      this.tag('Label').text = this.params.name
    },
  },
  keys: {
    back() {
      this.fireAncestors('$goBack', { reset: false })
    },
  },
})
