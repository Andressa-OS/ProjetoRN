import React, { useState } from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import estiloListaCarrinho from './estiloListaCarrinho.js'
import { FontAwesome } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import preTexto from '../preTexto/PreTexto'
import PreTexto from '../preTexto/PreTexto'

const ListaCarrinho = ({ data }) => {

    const [item, setItem] = useState(data)

    return (
        <View style={estiloListaCarrinho.areaItens}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    <PreTexto text='Produtos do carrinho' marginLeft={20} />
                }
                ListFooterComponent={
                    <View style={estiloListaCarrinho.payContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={estiloListaCarrinho.payText}>Preço final:</Text>
                            <Text style={estiloListaCarrinho.payText}>R$107,00</Text>
                        </View>
                        <TouchableOpacity style={estiloListaCarrinho.payButton}>
                            <Text style={estiloListaCarrinho.payText, { color: '#fff' }}>Prosseguir para o pagamento</Text>
                            <FontAwesome name="credit-card-alt" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <View style={estiloListaCarrinho.carrinhoContainer}>
                            <View style={estiloListaCarrinho.roundView}>
                                <Image source={item.foto} style={estiloListaCarrinho.foto} />
                            </View>

                            <View style={estiloListaCarrinho.textoView}>
                                <Text style={estiloListaCarrinho.textoTitulo}>{item.titulo}</Text>
                                <Text style={estiloListaCarrinho.textoPreco}>R${item.preco} un.</Text>
                            </View>

                            <View style={estiloListaCarrinho.selectView}>
                                <Picker
                                    selectedValue={item.quantidade}
                                    style={{ height: 40, width: 80, backgroundColor: '#EAEAEA', color: '#000' }}
                                    mode="dropdown"
                                >
                                    <Picker.Item label='0 un.' value='0' />
                                    <Picker.Item label='1 un.' value='1' />
                                    <Picker.Item label='2 un.' value='2' />
                                    <Picker.Item label='3 un.' value='3' />
                                    <Picker.Item label='4 un.' value='4' />
                                    <Picker.Item label='5 un.' value='5' />
                                </Picker>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )


}

export default ListaCarrinho