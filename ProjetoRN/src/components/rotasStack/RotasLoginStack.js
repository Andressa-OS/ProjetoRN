import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../views/Login/Login'
import Sobre from '../../views/Sobre/Sobre'
import Produto from '../../views/Produto/Produto'
import RotasTab from '../rotasTab/RotasTab'

const Stack = createStackNavigator()

const RotasLoginStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen
                name="Login"
                component={Login}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Inicial"
                component={RotasTab}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Produto"
                component={Produto}
                options={
                    {
                        headerShown: false
                    }
                }
            />
        </Stack.Navigator>
    )
}

export default RotasLoginStack