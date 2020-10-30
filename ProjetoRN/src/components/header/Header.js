import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import estiloHeader from './estiloHeader'
import { EvilIcons } from '@expo/vector-icons';

function showBackButton(props) {
    if (props.showBackButton == true) {
        return (
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Image source={require('../../../assets/img/back.png')} style={{ width: 19.5, height: 19 }} />
            </TouchableOpacity>
        )
    }
}

function showAboutButton(props) {
    if (props.showAboutButton != false) {
        return (
            <TouchableOpacity onPress={() => { props.navigation.navigate('Sobre') }}>
                <EvilIcons name="question" size={30} color="black" />
            </TouchableOpacity>
        )
    }
}

const Header = (props) => {
    // const goNotificacao = () => {
    //     props.navigation.replace('Notificacao')
    // }

    //const isDrawerOpen = useIsDrawerOpen()

    // const exibirDrawer = () => {
    //     if (!isDrawerOpen) {
    //         props.navigation.openDrawer()
    //     }
    // }

    return (
        <View style={estiloHeader.container}>
            <View style={estiloHeader.options}>
                {showBackButton(props)}
            </View>


            <View style={estiloHeader.logo}>
                <Text style={estiloHeader.logoTexto}>lá rosali</Text>
                <Text style={[estiloHeader.logoTexto, estiloHeader.logoTextoRed]}>à</Text>
            </View>

            <View style={[estiloHeader.options, estiloHeader.about]}>
                {showAboutButton(props)}
            </View>
        </View >
    )
}

export default Header