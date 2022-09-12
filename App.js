import React from "react"
import { Component } from "react"
import { View, Text } from "react-native"

class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:'black'}}>
        <View style={{ width: 100, height: 50, backgroundColor: 'red' }}>
          <Text style={{ color: 'white' }}>Elemento</Text>
        </View>
      </View>
    )
  }
}
export default App

