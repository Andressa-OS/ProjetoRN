import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/header/Header'
import PreTexto from '../../components/preTexto/PreTexto'
import estiloSobre from './estiloSobre'

function Sobre({ navigation }) {
    return (
        <View>
            <Header showBackButton={true} showAboutButton={false} navigation={navigation} />
            <View style={{ marginTop: 80 }}>
                <PreTexto text='Sobre a Lá Rosalià' marginLeft={20} />
                <Text style={estiloSobre.texto}>
                    {`A Lá Rosalià atua no mercado de flores desde 1989. Nosso objetivo é prezar pela excelência, proporcionar um atendimento adequado e de alta qualidade aos nossos clientes.
                    
Sabemos que trabalhamos com sentimentos e datas especiais como aniversários, dia dos namorados, noivados, casamento, dia das mães, natal, entre outras. Por esse motivo buscamos agradar a todos os nossos clientes, fazendo com que eles se sintam a vontade e possam expressar todo o carinho nestes momentos.
                    
Nossas flores são de altíssima qualidade e decoradas com muito amor por nossa equipe, além disso, na Lá Rosalià você pode encontrar cestas de café da manhã, de frutas e chocolates, ramalhetes, buquês de noiva e serviço de decoração de festas.

Realizamos entregas na região com qualidade, pontualidade, segurança e rapidez.

Faça nos uma visita.
Será um prazer recebê-lo em nosso estabelecimento!

                    `}
                </Text>
            </View>
        </View>
    )
}
export default Sobre