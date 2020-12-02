import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import React from 'react'

import Navigation from './Navigation'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"  backgroundColor="#000"/>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  )
}
