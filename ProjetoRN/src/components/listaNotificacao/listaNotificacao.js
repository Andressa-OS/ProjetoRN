import React, { useState } from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import esitloListaNotificacao from './estiloListaNotificacao'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PreTexto from '../../components/preTexto/PreTexto'
import estiloListaNotificacao from '../listaNotificacao/estiloListaNotificacao'

const ListaNotificacao = ({ data }) => {

    const [item, setItem] = useState(data)

    return (
        <View style={estiloListaNotificacao.areaItens}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    <PreTexto text='Suas últimas notificações' marginLeft={20} />
                }
                renderItem={({ item }) => {
                    return (
                        <View style={estiloListaNotificacao.notificacaoContainer}>
                            <View style={estiloListaNotificacao.roundView}>
                                <MaterialCommunityIcons name={item.icone} size={30} color="black" />
                            </View>

                            <View style={estiloListaNotificacao.textoView}>
                                <Text style={estiloListaNotificacao.textoTitulo}>{item.titulo}</Text>
                                <Text style={estiloListaNotificacao.textoComum}>{item.texto}</Text>
                            </View>

                            <View style={estiloListaNotificacao.quandoView}>
                                <Text style={estiloListaNotificacao.quandoText}>{item.quando1}</Text>
                                <Text style={estiloListaNotificacao.quandoText}>{item.quando2}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )


}

export default ListaNotificacao