import { Utils } from 'wpe-lightning-sdk'
import { Component } from 'Bolt'

import Main from './screens/Main'
import Splash from './screens/Splash'

export default Component({
  fonts() {
    return [
      { family: 'Raleway', url: Utils.asset('fonts/Raleway-Regular.ttf') },
      { family: 'RalewayMedium', url: Utils.asset('fonts/Raleway-Medium.ttf') },
      { family: 'RalewayBold', url: Utils.asset('fonts/Raleway-Bold.ttf') },
    ]
  },
  routes: {
    Main,
    Splash,
  },
  events: {
    init() {
      this.$router.go('Splash')
    },
  },
})
