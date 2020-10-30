import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import estiloPreTexto from './estiloPreTexto'

const PreTexto = (props) => {
    return (
        <View style={[estiloPreTexto.produtosTextoContainer, { marginLeft: props.marginLeft }]}>
            <MaterialCommunityIcons name="flower-tulip" size={25} color="black" />
            <Text style={estiloPreTexto.produtosTexto}>{props.text}</Text>
        </View>
    )
}

export default PreTexto