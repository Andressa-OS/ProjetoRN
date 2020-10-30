import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/header/Header'
import ListaCarrinho from '../../components/listaCarrinho/listaCarrinho'

function Notificacao({ navigation }) {

    const [notificacoes, setNotificacoes] = useState([
        {
            id: '1',
            titulo: 'Rosa',
            preco: '9,00',
            quantidade: '5',
            foto: require('../../../assets/img/flores/rosa.jpg'),
        },
        {
            id: '2',
            titulo: 'Tulipa',
            preco: '8,00',
            quantidade: '2',
            foto: require('../../../assets/img/flores/tulipaverm.jpg'),
        },
        {
            id: '3',
            titulo: 'Lírio',
            preco: '8,00',
            quantidade: '4',
            foto: require('../../../assets/img/flores/lily.jpg'),
        },
        {
            id: '4',
            titulo: 'Margarida',
            preco: '7,00',
            quantidade: '2',
            foto: require('../../../assets/img/flores/margarida.jpg'),
        },
    ])


    return (
        <View>
            <Header showBackButton={false} navigation={navigation} />
            <ListaCarrinho data={notificacoes} />
        </View>
    )
}
export default Notificacao