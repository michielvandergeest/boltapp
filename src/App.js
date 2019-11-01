import { Application } from 'Bolt'
import Colors from './Colors'

import Splash from './screens/Splash'
import Main from './screens/Main'

const App = Application({
  name: 'App',
  debug: true,
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
