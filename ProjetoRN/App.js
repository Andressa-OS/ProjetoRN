import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'
import RotasLoginStack from './src/components/rotasStack/RotasLoginStack'
import { AppLoading } from 'expo';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RotasLoginStack />
    </NavigationContainer>
  )
}