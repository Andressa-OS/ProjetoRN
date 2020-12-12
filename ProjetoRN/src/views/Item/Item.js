import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import { MaterialIcons } from '@expo/vector-icons';
import { FloresFB } from '../../firebase/floresFB';
import Header from '../../components/header/Header';

function Item({ navigation, route }) {

    const [item, setItem] = useState({});
    const { operacao, setOperacao } = route.params;
    const floresFB = new FloresFB();

    useEffect(() => {
        setItem(route.params.item);
    }, [route.params.item])

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const salvar = () => {
        operacao == 'adicionar' ? floresFB.adicionarFlor(item) : floresFB.editarFlor(item);
        voltar();
    }

    const remover = () => {
        floresFB.removerFlor(item);
        voltar();
    }

    return (
        <View style={estiloItem.container}>
            <Header navigation={navigation} showBackButton={true} />

            <View style={estiloItem.formularioContainer}>
                <View style={estiloItem.campoContainer}>
                    <Text style={estiloItem.texto}>Nome:</Text>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Nome da flor"
                        onChangeText={nome => setItem({ ...item, nome })}
                        value={item.nome}
                    />

                </View>
                <View style={estiloItem.campoContainer}>
                    <Text style={estiloItem.texto}>Preço:</Text>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Preço da unidade da flor"
                        keyboardType="numeric"
                        onChangeText={preco => setItem({ ...item, preco })}
                        value={item.preco ? item.preco.toString() : item.preco}
                    />

                </View>
                <View style={estiloItem.campoContainer}>
                    <Text style={estiloItem.texto}>Cor destaque:</Text>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Cor em destaque da flor"
                        onChangeText={corDestaque => setItem({ ...item, corDestaque })}
                        value={item.corDestaque}
                    />
                </View>
                <View style={estiloItem.campoContainer}>
                    <Text style={estiloItem.texto}>Descrição:</Text>
                    <ScrollView style={estiloItem.campoDescricaoScroll}>
                        <TextInput
                            style={estiloItem.campoDescricao}
                            placeholder="Descrição da flor"
                            multiline={true}
                            numberOfLines={4}
                            blurOnSubmit={false}
                            onChangeText={descricao => setItem({ ...item, descricao })}
                            value={item.descricao}
                        />
                    </ScrollView>

                </View>
                <View style={estiloItem.botaoContainer}>
                    <TouchableOpacity onPress={remover} style={estiloItem.botao}>
                        <MaterialIcons name="delete" size={24} color="black" />
                        <Text style={estiloItem.botaoTexto}>Apagar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={salvar} style={estiloItem.botao}>
                        <MaterialIcons name="save" size={28} color="black" />
                        <Text style={estiloItem.botaoTexto}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Item;
