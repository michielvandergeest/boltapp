import { Application } from 'Bolt'
import Colors from './Colors'

import Splash from './screens/Splash'
import Main from './screens/Main'

const App = Application({
  name: 'App',
  debug: true,
  fonts: [
    { family: 'Raleway', url: './assets/fonts/Raleway-Regular.ttf' },
    { family: 'RalewayMedium', url: './assets/fonts/Raleway-Medium.ttf' },
    { family: 'RalewayBold', url: './assets/fonts/Raleway-Bold.ttf' },
  ],
  // images to preload _before_ the App is mounted
  // (beware: only preload what is really necessary!)
  preload: ['./assets/logo.png', './assets/bg.png'],
  template: {
    color: Colors.gray400,
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

export default App
