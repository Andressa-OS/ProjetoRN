import React from 'react';
import { StyleSheet, StatusBar } from 'react-native'

const estiloListaProdutos = StyleSheet.create({
    areaItens: {
        // justifyContent: 'space-between'
        // paddingHorizontal: 15,
        // marginBottom: 170,
    },
    produtoContainer: {
        backgroundColor: '#fff',
        flexBasis: 0,
        flexGrow: 1,
        borderRadius: 10,
        marginBottom: 23,
        marginHorizontal: 10,
        padding: 0,
        shadowColor: "#000",
        elevation: 4,
    },
    imagem: {
        borderRadius: 10,
        width: '100%',
        height: 230,
        resizeMode: "cover"
    },
    produtoPreco: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: '#A41A1A',
        padding: 6
    },
    produtoNome: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: '#454545',
        padding: 6
    }
})

export default estiloListaProdutos