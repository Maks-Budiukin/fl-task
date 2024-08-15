import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { themePlugin } from './plugins/themePlugin'

const app = createApp(App)

app.use(router)

app.use(themePlugin, {
  defaultTheme: 'light',
  themes: {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000'
    },
    dark: {
      backgroundColor: '#000000',
      color: '#ffffff'
    }
  }
})

app.directive('autofocus', {
  mounted: (el) => {
    let focusEl = el

    if (!(el instanceof HTMLInputElement)) {
      focusEl = el.querySelector('input, textarea, [tabindex]')
    }

    focusEl.focus()
  }
})

app.mount('#app')
