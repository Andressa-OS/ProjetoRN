import React from 'react'
import { StyleSheet } from 'react-native'

const estiloListaCarrinho = StyleSheet.create({
    areaItens: {
        paddingTop: 80,
    },
    carrinhoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    roundView: {
        marginHorizontal: 14,
        width: 70,
        height: 70,
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
        fontSize: 16,
    },
    textoPreco: {
        fontSize: 12
    },
    selectView: {
        marginRight: 14,
        justifyContent: 'center',
    },
    select: {
        height: 50,
        width: 100,
    },
    foto: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    payContainer: {
        margin: 15,
    },
    payText: {
        fontSize: 16,
    },
    payButton: {
        backgroundColor: '#A41A1A',
        width: '100%',
        height: 48,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 11,
        position: 'relative',
        justifyContent: 'space-between',
    },
})

export default estiloListaCarrinho