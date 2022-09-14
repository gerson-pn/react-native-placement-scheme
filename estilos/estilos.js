import React from "react";
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundoBranco: { backgroundColor: 'white' },
    fundoPreto: { backgroundColor: 'black' },
    fundoVermelho: { backgroundColor: 'red' },
    fundoAmarelo: { backgroundColor: 'yellow' },
    fundoVerde: { backgroundColor: 'green' },
    tamanho10: { flex: 0.09 },
    tamanho100: { flex: 1 },
    direcaoLinha: { flexDirection: "row" },
    direcaoColuna: { flexDirection: "column" },
    justificacaoEspacada: { justifyContent: "space-around" },
    justificacaoCentralizada: { justifyContent: "center" },
    alinhamentoCentralizado:{alignItems:"center"},
    bordarDestacada: { borderColor: 'black', borderWidth: 1 },
    tamanhoBoxPequeno: { width: 50, height: 50 },
    tamanhoBoxMedio: { width: 100, height: 100 },
    tamanhoBoxGrande: { width: 200, height: 200 }
})

export default estilos