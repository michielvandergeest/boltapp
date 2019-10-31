import { Component } from 'Bolt'
import Colors from '../colors'

const width = 400
const margin = 40

let i = 1
export default function() {
  i++
  const defaults = {
    name: 'Item' + i,
    template: {
      transitions: {
        y: { duration: 0.2 },
      },
      w: width,
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
      init() {
        this.x = this.data.index * (width + margin)
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
