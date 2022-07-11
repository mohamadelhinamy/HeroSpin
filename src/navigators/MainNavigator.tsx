import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from 'screens/Home'
import Heroes from 'screens/Heroes'

const MainNavigator: FC = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='heroes' component={Heroes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
