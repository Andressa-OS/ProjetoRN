import React, { useState } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import estiloLogin from './estiloLogin'

function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const entrar = () => {
        if (email == ' ' || senha == ' ') {
            Alert.alert(
                'Preenchimento obrigatório', 'Digite o seu email e a senha para entrar.',
                [
                    { text: 'Ok' }
                ]
            )
        } else {
            navigation.replace('Inicial')
        }
    }

    return (
        <View style={estiloLogin.container}>
            <Image source={require('../../../assets/img/logo-01.png')} style={estiloLogin.logo} />

            <View style={estiloLogin.fields}>
                <Text style={[estiloLogin.fieldsText, estiloLogin.greyText]}>Email</Text>
                <TextInput style={estiloLogin.fieldsTextInput}
                    onChangeText={email => setEmail(email)}
                    value={email} />
            </View>

            <View style={estiloLogin.fields}>
                <Text style={[estiloLogin.fieldsText, estiloLogin.greyText]}>Palavra passe</Text>
                <TextInput style={estiloLogin.fieldsTextInput}
                    secureTextEntry={true}
                    onChangeText={senha => setSenha(senha)}
                    value={senha} />
            </View>

            <View style={estiloLogin.checkbox}>
                <View style={estiloLogin.fakeCheckbox}></View>
                <Text style={[estiloLogin.fieldsText, estiloLogin.checkboxText, estiloLogin.greyText]}>Lembrar desse dispositivo</Text>
            </View>

            <TouchableOpacity style={estiloLogin.loginButton} onPress={entrar}>
                <Text style={[estiloLogin.fieldsText, estiloLogin.textWhite, estiloLogin.textLeft]}>Efetuar login</Text>
                <MaterialCommunityIcons name='arrow-right-circle' size={24} color='white' style={estiloLogin.textRight} />
            </TouchableOpacity>

            <Text style={[estiloLogin.createAccountText, estiloLogin.greyText]}>Não possui uma conta? Toque aqui</Text>
        </View>
    )
}

export default Login