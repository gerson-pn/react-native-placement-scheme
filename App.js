import React from "react"
import { Component } from "react"
import { View, Text } from "react-native"

class App extends Component {
  render() {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>

        <View style={{ flex: 1.75, backgroundColor: 'yellow' }}></View>
        
        <View style={{ flex: 0.25, backgroundColor: 'green' }}></View>
      </>
    )
  }
}
export default App

