import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'

const estiloHeader = StyleSheet.create({
    container: {
        height: 80,
        paddingHorizontal: 29,
        position: 'absolute',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: "#000",
        elevation: 4,
    },
    logo: {
        marginTop: 5,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '50%',
        textAlign: 'center'
    },
    logoTexto: {
        alignSelf: 'center',
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        color: '#444444',
    },
    logoTextoRed: {
        color: '#A41A1A'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25%'
    },
    about: {
        justifyContent: 'flex-end'
    }
})

export default estiloHeader