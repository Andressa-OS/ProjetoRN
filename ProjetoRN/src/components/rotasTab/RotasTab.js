import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
import Inicial from '../../views/Inicial/Inicial'
import Perfil from '../../views/Perfil/Perfil'
import Carrinho from '../../views/Carrinho/Carrinho'
import Notificacao from '../../views/Notificacao/Notificacao'
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const icones = {
    Inicial: { name: 'home' },
    Carrinho: { name: 'shoppingcart' },
    Notificacao: { name: 'bells' },
    Perfil: { name: 'user' }
}

const RotasTab = () => {
    return (
        <Tab.Navigator initialRouteName="Inicial"

            tabBarOptions={{
                labelStyle: { fontFamily: 'Poppins_400Regular', fontSize: 12, marginBottom: 5 },
                style: {
                    height: 65, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
                    shadowColor: "#000",
                    elevation: 8,
                },
                activeTintColor: '#A41A1A'
            }}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    const { name } = icones[route.name]
                    return <AntDesign name={name} size={25} color={color} />
                }
            })}

        >
            <Tab.Screen name="Inicial" component={Inicial} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
            <Tab.Screen name="Notificacao" component={Notificacao} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}

export default RotasTab