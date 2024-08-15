import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.directive('autofocus', {
  mounted: (el, binding) => {
    let focusEl = el

    if (!(el instanceof HTMLInputElement)) {
      focusEl = el.querySelector('input, textarea, [tabindex]')
    }

    focusEl.focus()
  }
})
