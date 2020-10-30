import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/header/Header'
import estiloProduto from './estiloProduto'
import { AntDesign } from '@expo/vector-icons'

function Produto({ navigation, route }) {
    const { nome, preco, descricao, imagem, cor } = route.params
    const [nImagem, setNImagem] = useState(0)

    useEffect(() => {
        if (nImagem > imagem.length - 1) {
            setNImagem(0)
        }
        if (nImagem < 0) {
            setNImagem(imagem.length - 1)
        }
    })

    return (
        <View>
            <Header showBackButton={true} navigation={navigation} />
            <ScrollView style={estiloProduto.container}>
                <View style={estiloProduto.fotoContainer}>

                    <View style={estiloProduto.fotoChangeButton}>
                        <TouchableOpacity onPress={() => setNImagem(nImagem - 1)}>
                            <AntDesign name='arrowleft' size={25} color='rgba(0,0,0,0.5)' />
                        </TouchableOpacity>
                    </View>


                    <View style={[estiloProduto.fotoChangeButton, estiloProduto.fotoChangeButtonRight]}>
                        <TouchableOpacity onPress={() => setNImagem(nImagem + 1)}>
                            <AntDesign name='arrowright' size={25} color='rgba(0,0,0,0.5)' />
                        </TouchableOpacity>
                    </View>


                    <Image source={imagem[nImagem]} style={estiloProduto.foto} />

                </View>

                <View style={estiloProduto.containerInfo}>
                    <View style={estiloProduto.containerInfoMainText}>
                        <Text style={[estiloProduto.infoTitulo, { color: cor }]}>{nome}</Text>
                        <Text style={[estiloProduto.infoPreco, { color: cor }]}>R${preco}</Text>
                    </View>

                    <Text>{descricao}</Text>

                    <TouchableOpacity style={[estiloProduto.addCartButton, { backgroundColor: cor }]}>
                        <Text style={[estiloProduto.buttonText]}>Adicionar ao carrinho de compras</Text>
                        <AntDesign name='pluscircle' size={24} color='white' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Produto