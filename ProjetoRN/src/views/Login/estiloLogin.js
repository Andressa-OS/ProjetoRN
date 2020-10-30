import { StyleSheet } from 'react-native'

const estiloLogin = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    logo: {
        width: 138,
        height: 147,
        alignSelf: 'center',
        marginBottom: 62
    },
    greyText: {
        color: '#555'
    },
    fields: {
        width: '100%',
        marginBottom: 12
    },
    fieldsText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
    },
    fieldsTextInput: {
        backgroundColor: '#E8E6E6',
        borderRadius: 5,
        height: 48,
        padding: 10
    },
    checkbox: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },
    fakeCheckbox: {
        width: 22,
        height: 22,
        backgroundColor: '#E8E6E6',
        borderRadius: 3
    },
    checkboxText: {
        marginLeft: 4
    },
    loginButton: {
        backgroundColor: '#A41A1A',
        width: '100%',
        height: 48,
        borderRadius: 5,
        marginTop: 62,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 11,
        position: 'relative'
    },
    textWhite: {
        color: '#FFF'
    },
    textRight: {
        position: 'absolute',
        right: 11
    },
    createAccountText: {
        paddingTop: 11,
        fontSize: 12
    }
})

export default estiloLogin