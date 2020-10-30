import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/header/Header'
import ListaNoficicacao from '../../components/listaNotificacao/listaNotificacao'

function Notificacao({ navigation }) {

    const [notificacoes, setNotificacoes] = useState([
        {
            id: '1',
            titulo: 'A caminho!',
            texto: 'O seu pedido acabou de sair do centro de distribuição, esperamos que goste do produto!',
            quando1: 'Hoje',
            quando2: '14:47',
            icone: 'heart-circle'
        },
        {
            id: '2',
            titulo: 'Só mais um pouco!',
            texto: 'O seu pedido acabou de ser enviado, em breve ele chegará no centro de distribuição da sua cidade!',
            quando1: 'Ontem',
            quando2: '19:46',
            icone: 'truck-fast'
        },
        {
            id: '3',
            titulo: 'Quase aí!',
            texto: 'O seu pedido acabou de ser embalado, em breve ele chegará na sua casa!',
            quando1: 'Ontem',
            quando2: '15:45',
            icone: 'package-variant-closed'
        }
    ])


    return (
        <View>
            <Header showBackButton={false} navigation={navigation} />
            <ListaNoficicacao data={notificacoes} />
        </View>
    )
}
export default Notificacao