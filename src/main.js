import Vue from 'vue'
import vuetify from './plugins/vuetify'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import { router } from './_helpers'
import store from '@/_store'

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
