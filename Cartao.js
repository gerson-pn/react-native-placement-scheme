import React, { Component } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
const area = StyleSheet.create({
    direcao: { flexDirection: 'row' }
})
const imagem = StyleSheet.create({
    afastamento: { padding: 10 },
    tamanho: { width: 100, height: 100 }
})
const texto = StyleSheet.create({
    afastamento: { top: 30 },
    cor: { color: '#89CFF0' }
})
export default class Cartao extends Component {
    render() {
        let url = this.props.url
        return (
            <View style={area.direcao}>
                <View style={imagem.afastamento}>
                    <Image source={{ uri: url }} style={imagem.tamanho} ></Image>
                </View>
                <View style={texto.afastamento}>
                    <Text style={texto.cor}>
                        {this.props.nome}
                    </Text>
                    <Text style={texto.cor}>
                        {this.props.disciplina}
                    </Text>
                </View>
            </View>
        )
    }
}

