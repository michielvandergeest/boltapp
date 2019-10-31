import { Component } from 'Bolt'
import Colors from '../colors'
import Item from './Item'

const height = 280

export default function() {
  const defaults = {
    template: {
      h: height,
      x: 60,
      color: Colors.transparent,
      Title: {
        color: Colors.gray100,
        Text: {
          text: {
            fontSize: 32,
          },
        },
      },
      List: {
        y: 80,
        transitions: {
          x: { duration: 0.4 },
        },
      },
    },
    data: {
      current: 0,
      items: null,
      title: null,
    },
    events: {
      firstActive() {
        this.tag('Title.Text').text = this.data.title
        this.y = 60 + this.data.index * (height + 60)

        this.tag('List').children = this.data.items.map((item, index) => {
          return Item({
            data: { ...item, ...{ index, action: this.data.action } },
          })
        })
      },
    },
    computed: {
      slide() {
        // this could be a oneliner, but it would make it a bit difficult to understand what's going on ;)
        const totalItems = this.tag('List').children.length
        const visibleItems = 4
        const startScrollingAfter = 2
        const itemSizeWithMargin = 400 + 40

        const slide =
          // calculate the nr of positions to slide (but never more than total nr. of items - visible items)
          Math.min(this.data.current - (startScrollingAfter - 1), totalItems - visibleItems) *
          // multiply with the size for each scroll
          itemSizeWithMargin *
          // make it negative
          -1

        // never slide with a positive value
        return Math.min(slide, 0)
      },
    },
    watch: {
      current() {
        this.tag('List').setSmooth('x', this.data.slide)
      },
    },
    keys: {
      right() {
        this.data.current = Math.min(this.data.current + 1, this.tag('List').children.length - 1)
      },
      left() {
        this.data.current = Math.max(this.data.current - 1, 0)
      },
    },
    delegateFocus() {
      return this.tag('List').children[this.data.current]
    },
  }

  return Component(defaults, ...arguments)
}
