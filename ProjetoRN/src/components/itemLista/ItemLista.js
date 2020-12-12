import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import estiloListaProdutos from '../listaProdutos/estiloListaProdutos'

const ItemLista = ({ data, detalhe }) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloListaProdutos.produtoContainer}>
            <TouchableOpacity onPress={detalhe}>
                {/* <Image source={item.imagem[0]} style={estiloListaProdutos.imagem} /> */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={estiloListaProdutos.produtoNome}>{item.nome}</Text>
                    <Text style={estiloListaProdutos.produtoPreco}>R${item.preco}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ItemLista;