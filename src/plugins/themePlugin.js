/* eslint-disable no-unused-vars */
import { reactive } from 'vue'

export const themePlugin = {
  install(app, options) {
    const savedTheme = localStorage.getItem('theme')
    const defaultTheme = savedTheme ? savedTheme : options.defaultTheme

    const theme = reactive({
      currentTheme: defaultTheme,

      setTheme(newTheme) {
        this.currentTheme = newTheme
        document.body.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
      }
    })

    document.body.setAttribute('data-theme', theme.currentTheme)

    app.provide('theme', theme)
  }
}
