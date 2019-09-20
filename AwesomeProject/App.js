import React, { Component } from 'React';
import { Text, View } from 'react-native';

class App extends Component {
render() {
  return (
    <View style={{flex: 1, justifyContent: "center" , alignItems: "center"}}>
      <Text>
        Hello, World!
      </Text>
    </View>
  )
}
}

export default App;