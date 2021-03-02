import React from 'react'
import { useTheme, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import theme from '../utils/theme.js'

const defaultContextData = {
  light: false,
  toggle: () => {}
}

const ThemeContext = React.createContext(defaultContextData)

const useEffectLightMode = () => {
  const [themeState, setThemeState] = React.useState({
    light: true,
    hasThemeMounted: false
  })
  React.useEffect(() => {
    const lsLight = localStorage.getItem('light') === 'true'
    setThemeState({ light: lsLight, hasThemeMounted: true })
    console.log('theme state change happened')
  }, [])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectLightMode()

  if (!themeState.hasThemeMounted) {
    return <div />
  }

  const toggle = () => {
    const light = !themeState.light
    localStorage.setItem('light', JSON.stringify(light))
    setThemeState({ ...themeState, light })
  }

  const computedTheme = themeState.light ? theme('light') : theme('dark')

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          light: themeState.light,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export { ThemeProvider, useTheme }
