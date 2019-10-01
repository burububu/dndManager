import React, { Component } from 'react';
import { StyleSheet, View, Button, Picker, Text } from 'react-native';
import Race from '../data/races.json'
import Clas from '../data/classes.json'
import Background from '../data/backgrounds.json'

export default class characterBuilder extends Component {
  constructor(props) {
    super(props);
    this.race = Race
    
    this.clas = Clas

    this.background = Background

    this.state = {
      character: {race: this.race[Object.keys(this.race)[0]], clas: this.clas[Object.keys(this.clas)[0]], background: this.background[Object.keys(this.background)[0]]},
      race: null,
      clas: null,
      background: null
    };
  }
  static navigationOptions = {
    title: 'Character Builder',
  };

  raceList = (request) =>{
    return( Object.keys(this[request]).map( (name,index) => { 
          return( <Picker.Item label={name} key={index} value={name}  />)} ));
}



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Pick your traits</Text>
        <View style={styles.pickerContainer}>
        <Text style={styles.txt}> {"Race:"}</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.race}
          onValueChange={(itemValue) => {
            this.setState({race: itemValue})
            this.setState(prevState => ({
              character: {
                  ...prevState.character,
                  race: this.race[itemValue]
              }
            }))
            }} 
        >  
          {this.raceList('race')} 
        </Picker>
        </View>

        <View style={styles.pickerContainer}>
        <Text style={styles.txt}> {"Class:"}</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.clas}
          onValueChange={(itemValue) => {
            this.setState({clas: itemValue})
            this.setState(prevState => ({
              character: {
                  ...prevState.character,
                  clas: this.clas[itemValue]
              }
            }))
            }} 
        >  
          {this.raceList('clas')} 
        </Picker>
        </View>

        <View style={styles.pickerContainer}>
        <Text style={styles.txt}> {"Background:"}</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.background}
          onValueChange={(itemValue) => {
            this.setState({background: itemValue})
            this.setState(prevState => ({
              character: {
                  ...prevState.character,
                  background: this.background[itemValue]
              }
            }))
            }} 
        >  
          {this.raceList('background')} 
        </Picker>
        </View>

        <Button
          color='#58170D'
          title="Next"
          onPress={() => {
            navigate('SecondPage', {
              JSON_ListView_Clicked_Item: {character: this.state.character}
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
  pickerContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    color: '#58170D',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    textAlign: 'center',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    color: '#000000',
  },
  txt: {
    margin: 15,
    fontSize: 18,
    color: '#58170D',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
