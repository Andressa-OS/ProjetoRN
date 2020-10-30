import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../../components/header/Header'
import ListaProdutos from '../../components/listaProdutos/listaProdutos'

function Inicial({ navigation }) {
    return (
        <View>
            <Header navigation={navigation} />
            <View style={{ marginTop: 80 }}>
                <ListaProdutos navigation={navigation} />
            </View>
        </View>
    )
}
export default Inicial