import { Utils } from 'wpe-lightning-sdk'
import { Component } from 'Bolt'
import Colors from '../Colors'

export default Component({
  name: 'Splash',
  template() {
    return {
      color: Colors.gray200,
      rect: true,
      w: w => w,
      h: h => h,
      Logo: {
        mount: 0.5,
        x: w => w / 2,
        y: y => y / 3,
        src: Utils.asset('logo.png'),
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
          fontFace: 'RalewayMedium',
        },
      },
    }
  },
  events: {
    focus() {
      this.tag('Label').setSmooth('alpha', 1, { delay: 0.5, duration: 1.5 })
    },
    unfocus() {
      this.tag('Label').alpha = 0.001
    },
  },
  keys: {
    enter() {
      this.fireAncestors('$goTo', 'Main')
    },
  },
})
