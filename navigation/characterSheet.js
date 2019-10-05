import React, { Component } from 'react';
import { StyleSheet, View,  Text, Button } from 'react-native';

export default class characterSheet extends Component {
  constructor(props) {
    super(props);
    this.state = props.navigation.state.params.JSON_ListView_Clicked_Item.character;
  }
  static navigationOptions = {
    title: 'Character Sheet',
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}> 
        <View style={styles.infoTable}>
          <Text style={styles.txt}>Class: {this.state.clas.name}</Text>
          <Text style={styles.txt}>Race: {this.state.race.name}</Text>
          <Text style={styles.txt}>Background: {this.state.background.name}</Text>
          <Text style={styles.txt}>Hit Points: {this.state.clas.hp}</Text>
        </View>
        <View style={styles.attContainer}>
          <View style={styles.attColumn}>
            <View style={styles.att}>
              <Text style={styles.textStyle}>Strength</Text>
              <Text style={styles.txt}>Score</Text>
              <Text style={styles.txt}>{this.state.attributes.str}</Text>
              <Text style={styles.txt}>Modifier</Text>
              <Text style={styles.txt}>{this.state.modifiers.str}</Text>
            </View>

            <View style={styles.att}>
              <Text style={styles.textStyle}>Dexterity</Text>
              <Text style={styles.txt}>Score</Text>
              <Text style={styles.txt}>{this.state.attributes.dex}</Text>
              <Text style={styles.txt}>Modifier</Text>
              <Text style={styles.txt}>{this.state.modifiers.dex}</Text>
            </View>

            <View style={styles.att}>
              <Text style={styles.textStyle}>Constitution</Text>
              <Text style={styles.txt}>Score</Text>
              <Text style={styles.txt}>{this.state.attributes.con}</Text>
              <Text style={styles.txt}>Modifier</Text>
              <Text style={styles.txt}>{this.state.modifiers.con}</Text>
            </View>
          </View>


          <View style={styles.attColumn}>
            <View style={styles.att}>
              <Text style={styles.textStyle}>Intelligence</Text>
              <Text style={styles.txt}>Score</Text>
              <Text style={styles.txt}>{this.state.attributes.int}</Text>
              <Text style={styles.txt}>Modifier</Text>
              <Text style={styles.txt}>{this.state.modifiers.int}</Text>
            </View>

            <View style={styles.att}>
              <Text style={styles.textStyle}>Wisdom</Text>
              <Text style={styles.txt}>Score</Text>
              <Text style={styles.txt}>{this.state.attributes.wis}</Text>
              <Text style={styles.txt}>Modifier</Text>
              <Text style={styles.txt}>{this.state.modifiers.wis}</Text>
            </View>

            <View style={styles.att}>
              <Text style={styles.textStyle}>Charisma</Text>
              <Text style={styles.txt}>Score</Text>
              <Text style={styles.txt}>{this.state.attributes.cha}</Text>
              <Text style={styles.txt}>Modifier</Text>
              <Text style={styles.txt}>{this.state.modifiers.cha}</Text>
            </View>
          </View>
        </View>
        <Button
          color='#58170D'
          title="Next"
          onPress={ () => {
            navigate('ForthPage', {
              JSON_ListView_Clicked_Item: {character: this.state}
            })
          }}
        />
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
  infoTable: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  attColumn: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  att: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#58170D',
    textAlign: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    color: '#000000',
  },
});
