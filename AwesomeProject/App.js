import React, { Component } from 'React';
import { Text, View, Image } from 'react-native';

class App extends Component {
render() {
  let picture = {
    uri:
    'http://www.soulandspiritmagazine.com/wp-content/uploads/2015/04/omg-cute-things-112912_08-590x472.jpg'
  };
  return (
    <View style={{flex: 1, justifyContent: "center" , alignItems: "center"}}>
      <Text>
        Hello, World!
      </Text>
    
    <Image source={picture} style={{width: 200, height: 175}}/>
    </View>
  )
}
}

export default App;