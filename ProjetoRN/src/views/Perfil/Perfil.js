import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/header/Header'
import estiloPerfil from './estiloPerfil'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

function Perfil({ navigation }) {
    const data = [
        {
            nome: 'Guilherme Félix',
            descricao: 'Não consegui pensar em uma descrição boa. Design é legal, eu acho. Progrmação também',
            foto: require('../../../assets/img/guilherme.jpg'),
            flor1: require('../../../assets/img/flores/lily.jpg'),
            flor2: require('../../../assets/img/flores/girassol.jpg'),
            flor3: require('../../../assets/img/flores/lily2.jpg')
        },
        {
            nome: 'Andressa Oliveira',
            descricao: 'Me chamo Andressa, tenho 18 anos, estou cursando o ensino médio e faço curso técnico em informática. Amo livros, séries, música, animais e flores. Quero fazer a diferença no mundo ajudando as pessoas.',
            foto: require('../../../assets/img/andressa.jpg'),
            flor1: require('../../../assets/img/flores/girassol2.jpg'),
            flor2: require('../../../assets/img/flores/tulipaverm.jpg'),
            flor3: require('../../../assets/img/flores/rosabranca.jpg')
        }
    ]

    const [aluno, setAluno] = useState(data[0])

    return (
        <View>
            <Header showBackButton={false} navigation={navigation} />
            <View style={{ marginTop: 90, justifyContent: 'center' }}>
                <View style={[estiloPerfil.fotoContainer, estiloPerfil.roundImage]}>
                    <Image source={aluno.foto} style={[estiloPerfil.foto, estiloPerfil.roundImage]} />
                </View>

                <Text style={estiloPerfil.nome}>{aluno.nome}</Text>
                <Text style={estiloPerfil.texto}>Sala: 3 MI | Turma B | Lado A</Text>
                <Text style={[estiloPerfil.nome, estiloPerfil.descricao]}>{aluno.descricao}</Text>

                <View style={estiloPerfil.floresPreferidasContainer}>
                    <MaterialCommunityIcons name="flower-tulip" size={25} color="black" />
                    <Text style={estiloPerfil.floresPreferidasTexto}>Flores preferidas</Text>
                    <View style={estiloPerfil.floresPreferidasImageContainer}>
                        <Image source={aluno.flor1} style={[estiloPerfil.smallImage, estiloPerfil.roundImage]} />
                        <Image source={aluno.flor2} style={[estiloPerfil.smallImage, estiloPerfil.roundImage]} />
                        <Image source={aluno.flor3} style={[estiloPerfil.smallImage, estiloPerfil.roundImage]} />
                    </View>
                </View>

                <View style={estiloPerfil.botoesContainer}>
                    <TouchableOpacity onPress={() => { setAluno(data[0]) }} style={estiloPerfil.botao}>
                        <Text style={estiloPerfil.botaoTexto}>Aluno 1</Text>
                        <FontAwesome name="user-circle" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setAluno(data[1]) }} style={estiloPerfil.botao}>
                        <Text style={estiloPerfil.botaoTexto}>Aluno 2</Text>
                        <FontAwesome name="user-circle" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

        </ View >
    )
}

export default Perfil