import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Proficiencies from '../data/proficiencies.json';
import Attributes from '../data/attributes.json';

export default class skillsSheet extends Component {
    constructor(props){
        super(props);
        this.proficiencies = Proficiencies;
        this.character = props.navigation.state.params.JSON_ListView_Clicked_Item.character;
        this.atri = Attributes;

        this.proficiency = 2;
    }

    static navigationOptions = {
        title: 'Skills',
      };

    skillView (att) {
        let actual = this.atri[att]
        return(
            <Card title={actual}>
                {this.proficiencies[actual].map( (name,index) => {
                    if (this.character.background.proficiencies.includes(name)){
                        return( <Text>{name} {this.character.modifiers[att] + this.proficiency}</Text>)
                    }else{
                        return( <Text>{name} {this.character.modifiers[att]}</Text>)
                    }
                    })}
            </Card>
        )
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                    {this.skillView('str')}
                    {this.skillView('dex')}
                    {this.skillView('int')}
                    {this.skillView('wis')}
                    {this.skillView('cha')}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EEE5CE',
      justifyContent: 'space-evenly',
      flex: 1
    },
  });
  