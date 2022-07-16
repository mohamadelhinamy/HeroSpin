import React, { FC, useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { LangProvider } from './src/context/LangContext'
import MainNavigator from './src/navigators/MainNavigator'

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <LangProvider>
      <MainNavigator />
    </LangProvider>
  )
}

export default App
