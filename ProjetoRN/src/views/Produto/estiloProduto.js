import React from 'react'
import { StyleSheet } from 'react-native'

const estiloProduto = StyleSheet.create({
    container: {
        marginTop: 80
    },
    fotoContainer: {
        width: '100%',
        height: 400,
        position: 'relative'
    },
    foto: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    fotoChangeButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 100,
        position: 'absolute',
        top: '50%',
        marginHorizontal: 10,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    fotoChangeButtonRight: {
        right: 0
    },
    containerInfo: {
        margin: 20
    },
    infoTitulo: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 24
    },
    infoPreco: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20
    },
    containerInfoMainText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    addCartButton: {
        width: '100%',
        height: 48,
        borderRadius: 5,
        marginTop: 20,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 11,
        position: 'relative',
        justifyContent: 'space-between'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    }
})

export default estiloProduto