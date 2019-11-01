import { Component } from 'Bolt'
import Colors from '../colors'

let i = 0
export default function() {
  i++
  const defaults = {
    debug: true,
    name: 'Item' + i,
    template: {
      transitions: {
        y: { duration: 0.2 },
      },
      w: 400,
      h: 200,
      rect: true,
      color: Colors.gray600,
      Text: {
        text: {
          fontSize: 32,
        },
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
      },
    },
    data: {
      index: null,
      name: null,
      action: null,
    },
    events: {
      firstActive() {
        this.tag('Text').text = this.data.name
      },
      focus() {
        this.setSmooth('color', Colors.gray700)
        this.tag('Text').text.fontSize = 42
        this.setSmooth('y', -4)
      },
      unfocus() {
        this.setSmooth('color', Colors.gray600)
        this.tag('Text').text.fontSize = 32
        this.setSmooth('y', 0)
      },
    },
    keys: {
      enter() {
        this.data.action(this.data)
      },
    },
  }

  return Component(defaults, ...arguments)
}
