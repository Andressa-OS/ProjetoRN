import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
    container: {
        flex: 1,
    },
    formularioContainer: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        fontFamily: 'Roboto_400Regular',
    },
    campoContainer: {
        paddingHorizontal: 15,
        margin: 5,
    },
    campo: {
        width: '100%',
        fontSize: 18,
        backgroundColor: '#E8E6E6',
        borderRadius: 5,
        height: 48,
        padding: 10
    },
    campoDescricao: {
        width: '100%',
        height: 150,
        fontSize: 18,
        textAlignVertical: 'top',
        backgroundColor: '#E8E6E6',
        borderRadius: 5,
        padding: 10
    },
    campoDescricaoScroll: {
        width: '100%',
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 50,
    },
    botaoContainer: {
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    botao: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8E6E6',
        padding: 10,
    },
});

export default estiloItem;