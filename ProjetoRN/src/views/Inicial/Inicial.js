import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Header from '../../components/header/Header'
import { FloresFB } from '../../firebase/floresFB'
import ItemLista from '../../components/itemLista/ItemLista'
import PreTexto from '../../components/preTexto/PreTexto'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Inicial({ navigation }) {

    const [flores, setFlores] = useState([]);

    const floresFB = new FloresFB();

    useEffect(() => {
        floresFB.pegarItens()
            .orderBy('nome')
            .onSnapshot((query) => {
                const items = [];
                query.forEach((doc) => {
                    items.push({ ...doc.data(), id: doc.id });
                });
                setFlores(items);
            })
    }, [])

    const adicionar = () => {
        navigation.navigate('Item', { item: {}, operacao: 'adicionar' })
    }

    const editar = (item) => {
        navigation.navigate('Item', { item: item, operacao: 'editar' })
    }

    return (
        <View>
            <Header navigation={navigation} />
            <View style={{ marginTop: 80 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={flores}
                    numColumns={2}
                    ListHeaderComponent={
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <PreTexto text='Produtos da Lá Rosalià' marginLeft={20} />
                            <TouchableOpacity onPress={adicionar} style={{ marginTop: 32, marginRight: 26.5, marginBottom: 20, }}>
                                <MaterialCommunityIcons name="plus-circle" size={25} color="black" />
                            </TouchableOpacity>
                        </View>
                    }
                    renderItem={({ item }) => <ItemLista data={item} detalhe={() => editar(item)} />}
                />

                {/* <ListaProdutos navigation={navigation} /> */}
            </View>
        </View>
    )
}
export default Inicial