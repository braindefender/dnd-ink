import { createLogux } from '@logux/vuex'

import character from './character.js'
import icons from './icons.js'
import tabs from './tabs.js'

const Logux = createLogux({
  subprotocol: '1.0.0',
  server:
    process.env.NODE_ENV === 'development'
      ? 'ws://lmbd.ml:31337/'
      : 'wss://logux.example.com',
  userId: localStorage.getItem('userId'),
  credentials: localStorage.getItem('userToken')
})

const createStore = () => {
  const store = new Logux.Store({
    modules: {
      character,
      icons,
      tabs
    }
  })
  store.client.start()

  return store
}

export default createStore
