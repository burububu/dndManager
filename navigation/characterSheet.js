import React, { Component } from 'react';
import { StyleSheet, View,  Text } from 'react-native';

export default class characterSheet extends Component {
  constructor(props) {
    super(props);
    this.state = props.navigation.state.params.JSON_ListView_Clicked_Item.character;
  }
  static navigationOptions = {
    title: 'Character Sheet',
  };
 
  render() {
    return (
      <View style={styles.container}> 
        <View>
          <Text style={styles.textStyle}> {"Raca = "+ this.state.race.name}</Text>
          <Text style={styles.textStyle}> {"Class = "+this.state.clas.name}</Text>
          <Text style={styles.textStyle}> {"Background = "+this.state.background.name}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE5CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    color: '#58170D',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'dnd-font',
  },
  txt: {
    textAlign: 'center',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    color: '#000000',
  },
});
