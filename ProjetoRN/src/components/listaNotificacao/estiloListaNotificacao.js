import React from 'react'
import { StyleSheet } from 'react-native'

const estiloListaNotificacao = StyleSheet.create({
    areaItens: {
        paddingTop: 80,
    },
    notificacaoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    roundView: {
        marginHorizontal: 14,
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#E7E7E7',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textoView: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textoTitulo: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 12,
    },
    textoComum: {
        fontSize: 12
    },
    quandoView: {
        marginRight: 14,
        width: 37,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    quandoText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        color: '#444'
    }
})

export default estiloListaNotificacao