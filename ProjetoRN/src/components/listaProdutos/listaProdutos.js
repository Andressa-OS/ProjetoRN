import React, { useState } from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import estiloListaProdutos from './estiloListaProdutos'
import PreTexto from '../../components/preTexto/PreTexto'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ListaProdutos = (props) => {

    const [produtos, setProdutos] = useState([
        {
            id: '1',
            produto: 'Rosa',
            preco: '9,00',
            descricao: 'A rosa é oriunda dos jardins asiáticos há mais de 5.000 anos, sendo que em sua forma selvagem, esta flor é ainda mais antiga. Universalmente, a rosa é símbolo do amor, espiritualidade e o seu desabrochar simboliza o segredo e o mistério da vida.',
            imagem: [require('../../../assets/img/flores/rosa.jpg'), require('../../../assets/img/flores/rosa2.jpg')],
            cor: '#C35346'
        },
        {
            id: '2',
            produto: 'Tulipa',
            preco: '8,00',
            descricao: 'As tulipas estão entre as flores mais conhecidas e admiradas no mundo todo. O maior significado dessa flor é o de “amor perfeito“, mas eles podem receber outras definições conforme suas cores, como as tulipas vermelhas, que representam o amor verdadeiro.',
            imagem: [require('../../../assets/img/flores/tulipa.jpg'), require('../../../assets/img/flores/tulipa2.jpg')],
            cor: '#E66F8D'
        },
        {
            id: '3',
            produto: 'Margarida',
            preco: '7,00',
            descricao: 'Antigamente, a margarida era considerada a flor das donzelas e ainda hoje simboliza a juventude, o amor inocente e a sensibilidade. Esta delicada flor também representa a pureza, a paz, a bondade e afeto.',
            imagem: [require('../../../assets/img/flores/margarida.jpg'), require('../../../assets/img/flores/margarida2.jpg')],
            cor: '#E5D321'
        },
        {
            id: '4',
            produto: 'Girassol',
            preco: '8,00',
            descricao: `O girassol, conhecido pela sua grande flor amarela, é de fácil cultivo e pode embelezar seu jardim ou um vaso com poucos cuidados. A palavra girassol significa 'Flor do Sol' e simboliza felicidade. A cor amarela ou os tons cor de laranja das pétalas simbolizam calor, lealdade, entusiasmo e vitalidade, reflete a energia positiva do sol.`,
            imagem: [require('../../../assets/img/flores/girassol.jpg'), require('../../../assets/img/flores/girassol2.jpg')],
            cor: '#F8B700'
        }
    ])

    return (
        <View style={estiloListaProdutos.areaItens}>
            <FlatList
                data={produtos}
                keyExtractor={item => item.id}
                numColumns={2}
                ListHeaderComponent={
                    <PreTexto text='Produtos da Lá Rosalià' marginLeft={20} />
                }
                renderItem={({ item }) => {
                    return (
                        <View style={estiloListaProdutos.produtoContainer}>
                            <TouchableOpacity onPress={
                                () => {
                                    props.navigation.navigate('Produto', {
                                        nome: item.produto,
                                        preco: item.preco,
                                        imagem: item.imagem,
                                        descricao: item.descricao,
                                        cor: item.cor
                                    })
                                }}>
                                <Image source={item.imagem[0]} style={estiloListaProdutos.imagem} />
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={estiloListaProdutos.produtoNome}>{item.produto}</Text>
                                    <Text style={estiloListaProdutos.produtoPreco}>R${item.preco}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    )
}

export default ListaProdutos;