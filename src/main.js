import Vue from "vue"
import Ionic from "@ionic/vue"
import "@ionic/core/css/ionic.bundle.css"

import App from "./App.vue"
import store from "./store"
import router from "./router"

import "./registerServiceWorker"

Vue.config.productionTip = false

Vue.use(Ionic)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
