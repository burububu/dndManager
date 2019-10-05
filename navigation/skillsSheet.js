import React, { Component } from 'react';
import { StyleSheet, View, Button, Picker, Text } from 'react-native';
import Proficiencies from '../data/proficiencies.json'

export default class skillsSheet extends Component {
    constructor(props){
        super(props);
        this.proficiencies = Proficiencies;
        this.character = props.navigation.state.params.JSON_ListView_Clicked_Item.character

        this.strSkills = this.proficiencies.Strength
        this.dexSkills = this.proficiencies.Dexterity
        this.conSkills = this.proficiencies.Constitution
        this.intSkills = this.proficiencies.Intelligence
        this.wisSkills = this.proficiencies.Wisdom
        this.chaSkills = this.proficiencies.Charisma
    }

    skillView (att) {
        return( this[att + 'Skills'].map( (name,index) => { 
            return( <Text>{name} {this.character.modifiers[att]}</Text>)} ));
    }

    render() {
        return(
            <View style={styles.container}>
                <View>
                    <Text>Strenght</Text>
                    {this.skillView('str')}
                </View>
                <View>
                    <Text>Dexterity</Text>
                    {this.skillView('dex')}
                </View>
                <View>
                    <Text>Intelligence</Text>
                    {this.skillView('int')}
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
      flexDirection: 'row'
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
  