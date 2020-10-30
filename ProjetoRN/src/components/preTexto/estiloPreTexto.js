import React from 'react';
import { StyleSheet, StatusBar } from 'react-native'

const estiloPreTexto = StyleSheet.create({
    produtosTextoContainer: {
        flexDirection: 'row',
        marginTop: 32,
        // marginLeft: 10,
        marginBottom: 20,
    },
    produtosTexto: {
        textTransform: 'uppercase',
        fontFamily: 'Poppins_400Regular',
        marginLeft: 26.5,
        fontSize: 14,
    }
})

export default estiloPreTexto