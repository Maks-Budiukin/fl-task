import { computed, inject } from 'vue'

export const useTheme = () => {
  const theme = inject('theme')

  const currentTheme = computed(() => {
    return theme.currentTheme
  })

  const setTheme = () => {
    if (theme.currentTheme === 'light') theme.setTheme('dark')
    else theme.setTheme('light')
  }

  return {
    currentTheme,
    setTheme
  }
}
