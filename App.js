import React from "react"
import { Component } from "react"
import { View, Text } from "react-native"
import estilos from "./estilos/estilos"

class App extends Component {
  render() {
    return (
      <View style={estilos.tamanho100}>
        <View style={[estilos.tamanho10, estilos.direcaoLinha, estilos.bordarDestacada, estilos.fundoBranco]}>
          <View style={[estilos.tamanho100, estilos.fundoVermelho]}></View>
          <View style={[estilos.tamanho100, estilos.fundoVerde]}></View>
          <View style={[estilos.tamanho100, estilos.fundoAmarelo]}></View>
        </View>
        <View style={[estilos.tamanho100, estilos.fundoBranco, estilos.bordarDestacada]}>
          <View style={[estilos.tamanho100, estilos.direcaoLinha, estilos.justificacaoCentralizada, estilos.alinhamentoCentralizado]}>
            <View style={[estilos.fundoAmarelo, estilos.tamanhoBoxGrande]}></View>
            <View style={[estilos.fundoVermelho, estilos.tamanhoBoxGrande]}></View>
          </View>
          <View style={[estilos.tamanho100, estilos.direcaoLinha, estilos.justificacaoEspacada, estilos.alinhamentoCentralizado]}>
            <View >
              <View style={[estilos.tamanhoBoxMedio, estilos.fundoVermelho]}></View>
              <View style={[estilos.tamanhoBoxMedio, estilos.fundoVerde]}></View>
            </View>
            <View >
              <View style={[estilos.tamanhoBoxMedio, estilos.fundoVerde]}></View>
              <View style={[estilos.tamanhoBoxMedio, estilos.fundoAmarelo]}></View>
            </View>
            <View >
              <View style={[estilos.tamanhoBoxMedio, estilos.fundoVermelho]}></View>
              <View style={[estilos.tamanhoBoxMedio, estilos.fundoAmarelo]}></View>
            </View>
          </View>
        </View>
        <View style={[estilos.tamanho10, estilos.justificacaoEspacada, estilos.direcaoLinha, estilos.bordarDestacada, estilos.fundoBranco]}>
          <View style={[estilos.tamanhoBoxPequeno, estilos.fundoVermelho]}></View>
          <View style={[estilos.tamanhoBoxPequeno, estilos.fundoVerde]}></View>
          <View style={[estilos.tamanhoBoxPequeno, estilos.fundoAmarelo]}></View>
          <View style={[estilos.tamanhoBoxPequeno, estilos.fundoVermelho]}></View>
          <View style={[estilos.tamanhoBoxPequeno, estilos.fundoVerde]}></View>
        </View>
      </View>
    )
  }
}
export default App

