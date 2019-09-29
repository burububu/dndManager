import React, { Component } from 'react';
import { StyleSheet, View, Button, Picker, Text } from 'react-native';

export default class characterBuilder extends Component {
  constructor(props) {
    super(props);
    this.race = {
      human: {'name':'human','str':1,'des':1, 'con':1, 'int':1, 'wis':1, 'cha':1},  
      dwarf: {'name':'dwarf','str':0,'des':0, 'con':2, 'int':0, 'wis':0, 'cha':0}
    };
    
    this.clas = {
      fighter: {'name':'fighter','pv':10},  
      barbarian: {'name':'barbarian','pv': 12}
    };

    this.background = {
      acolyte: {'name':'acolyte','proficiencies': ['insight', 'religion']},  
      far_traveler: {'name':'far_traveler','proficiencies': ['athletics', 'intimidation']}
    };

    this.state = {
      character: {race:this.race.human, clas:this.clas.fighter, background:this.background.acolyte},
    };
  }
  static navigationOptions = {
    title: 'Character Builder',
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Pick your traits</Text>

        <View style={styles.pickerContainer}>
        <Text style={styles.txt}> {"Race:"}</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.character.race.name} 
          onValueChange={(itemValue) =>  
           this.setState(prevState => ({
            character: {                   
                ...prevState.character,    
                race: this.race[itemValue]
            }
        }))}  
        >  
          <Picker.Item label="Human" value='human' />  
          <Picker.Item label="Dwarf" value="dwarf" />  
        </Picker>
        </View>

        <View style={styles.pickerContainer}>
        <Text style={styles.txt}> {"Class:"}</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.character.clas.name}
          onValueChange={(itemValue) =>  
            this.setState(prevState => ({
            character: {                   
                ...prevState.character,    
                clas: this.clas[itemValue]
            }
        }))}  
        >  
          <Picker.Item label="Fighter" value="fighter" />  
          <Picker.Item label="Barbarian" value="barbarian" />  
        </Picker>
        </View>

        <View style={styles.pickerContainer}>
        <Text style={styles.txt}> {"Background:"}</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.character.background.name}  
          onValueChange={(itemValue) =>  
            this.setState(prevState => ({
            character: {                   
                ...prevState.character,    
                background: this.background[itemValue]
            }
        }))}  
        >  
          <Picker.Item label="Acolyte" value="acolyte" />  
          <Picker.Item label="Far traveler" value="far_traveler" />  
        </Picker>
        </View>

        <Button
          color='#58170D'
          title="Next"
          onPress={() =>
            navigate('SecondPage', {
              JSON_ListView_Clicked_Item: {character:this.state.character}
            })
          }
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
