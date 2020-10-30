import React from 'react'
import { StyleSheet } from 'react-native'
import { not } from 'react-native-reanimated'

const estiloPerfil = StyleSheet.create({
    container: {
        marginTop: 80,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    fotoContainer: {
        width: 112,
        height: 112,
        padding: 4,
        borderWidth: 4,
        borderColor: '#A41A1A',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    foto: {
        width: 100,
        height: 100,
    },
    roundImage: {
        borderRadius: 100
    },
    smallImage: {
        width: 70,
        height: 70,
    },
    nome: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        marginTop: 12,
        alignSelf: 'center'
    },
    texto: {
        fontSize: 14,
        alignSelf: 'center',
        marginVertical: 0
    },
    floresPreferidasContainer: {
        marginTop: 21,
        alignItems: 'center'
    },
    floresPreferidasTexto: {
        fontFamily: 'Poppins_400Regular',
        textTransform: 'uppercase',
        marginBottom: 20,
    },
    floresPreferidasImageContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 28,
        justifyContent: 'space-evenly'
    },
    descricao: {
        fontSize: 12,
        textAlign: 'justify',
        marginHorizontal: 28,
    },
    botoesContainer: {
        flexDirection: 'row',
        marginTop: 28,
        paddingHorizontal: 28,
        justifyContent: 'space-around'
    },
    botao: {
        backgroundColor: '#A41A1A',
        width: 130,
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    botaoTexto: {
        fontSize: 14,
        color: '#fff'
    },
})

export default estiloPerfil