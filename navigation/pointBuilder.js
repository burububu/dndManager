
import React, { Component } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const costs = [
	{ score: 8, cost: 0 },
	{ score: 9, cost: 1 },
	{ score: 10, cost: 2 },
	{ score: 11, cost: 3 },
	{ score: 12, cost: 4 },
	{ score: 13, cost: 5 },
	{ score: 14, cost: 7 },
  { score: 15, cost: 9 },
  { score: 16, cost: 12 },
  { score: 17, cost: 15 },
  { score: 18, cost: 19 }
];

const getCost = score => {
  const costItem = costs.find(c => c.score === score);
  return costItem ? costItem.cost : "-";
};

export default class SecondPage extends Component {
  constructor (props){
    super(props);
    
    this.state ={
      standard: 27,
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wis: 8,
      cha: 8
    }
    this.receivedCharacter = {
      race: this.props.navigation.state.params.JSON_ListView_Clicked_Item.character.race,
      clas: this.props.navigation.state.params.JSON_ListView_Clicked_Item.character.clas,
      background: this.props.navigation.state.params.JSON_ListView_Clicked_Item.character.background
    }
    this.attributes = {
      str: this.receivedCharacter.race.str + this.state.str,
      dex: this.receivedCharacter.race.dex + this.state.dex,
      con: this.receivedCharacter.race.con + this.state.con,
      int: this.receivedCharacter.race.int + this.state.int,
      wis: this.receivedCharacter.race.wis + this.state.wis,
      cha: this.receivedCharacter.race.cha + this.state.cha
    }
    this.modifiers = {
      str: Math.floor((this.attributes.str-10)/2),
      dex: Math.floor((this.attributes.dex-10)/2),
      con: Math.floor((this.attributes.con-10)/2),
      int: Math.floor((this.attributes.int-10)/2),
      wis: Math.floor((this.attributes.wis-10)/2),
      cha: Math.floor((this.attributes.cha-10)/2)
    }
    this.character = {
      race: this.receivedCharacter.race,
      clas: this.receivedCharacter.clas,
      background: this.receivedCharacter.background,
      attributes: this.attributes,
      modifiers: this.modifiers
    }
  }
  static navigationOptions = {
    title: 'Point Builder',
  };

  increase (currentScore, remaining, att) {
    const currentCost = getCost(currentScore + 1 );
    const oldCost = getCost(currentScore);
    const costDiff = oldCost - currentCost;
    const actual =  (remaining + costDiff);
    if (actual >= 0 && this.state[att] < 15){
      this.setState({standard: actual})
      this.setState({[att]: currentScore + 1})
    }
  };

  decrease (currentScore, remaining, att) {
    const currentCost = getCost(currentScore - 1 );
    const oldCost = getCost(currentScore);
    const costDiff = oldCost - currentCost;
    const actual =  (remaining + costDiff);
    if (actual <= 27 && this.state[att] > 8){
      this.setState({standard: actual})
      this.setState({[att]: currentScore - 1})
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.screen}>
        
        <View style={styles.columnScreen}>
          <Text style={styles.pnt}>
            Points to build {this.state.standard}
          </Text>
        </View>
        <View style={styles.btnPlace}>
          <View style={styles.columnFlex}>
            <Text>
              STR + {this.character.race.str}
            </Text>
            <View style={styles.rowFlex}>
            <TouchableOpacity style={styles.button} onPress={this.decrease.bind(this, this.state.str,this.state.standard, 'str')}>
              <Text style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
              <Text style={styles.pnt}>{this.state.str}</Text>
            <TouchableOpacity style={styles.button} onPress={this.increase.bind(this, this.state.str,this.state.standard, 'str')}>
              <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            </View>

            <Text>
              DEX + {this.character.race.des}
            </Text>
            <View style={styles.rowFlex}>
            <TouchableOpacity style={styles.button} onPress={this.decrease.bind(this, this.state.dex,this.state.standard, 'dex')}>
              <Text style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
              <Text style={styles.pnt}>{this.state.dex}</Text>
            <TouchableOpacity style={styles.button} onPress={this.increase.bind(this, this.state.dex,this.state.standard, 'dex')}>
              <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            </View>

            <Text>
              CON + {this.character.race.con}
            </Text>
            <View style={styles.rowFlex}>
            <TouchableOpacity style={styles.button} onPress={this.decrease.bind(this, this.state.con,this.state.standard, 'con')}>
              <Text style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
              <Text style={styles.pnt}>{this.state.con}</Text>
            <TouchableOpacity style={styles.button} onPress={this.increase.bind(this, this.state.con,this.state.standard, 'con')}>
              <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.columnFlex}>
            <Text>
              INT + {this.character.race.int}
            </Text>
            <View style={styles.rowFlex}>
            <TouchableOpacity style={styles.button} onPress={this.decrease.bind(this, this.state.int,this.state.standard, 'int')}>
              <Text style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
              <Text style={styles.pnt}>{this.state.int}</Text>
            <TouchableOpacity style={styles.button} onPress={this.increase.bind(this, this.state.int,this.state.standard, 'int')}>
              <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            </View>

            <Text>
              WIS + {this.character.race.wis}
            </Text>
            <View style={styles.rowFlex}>
            <TouchableOpacity style={styles.button} onPress={this.decrease.bind(this, this.state.wis,this.state.standard, 'wis')}>
              <Text style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
              <Text style={styles.pnt}>{this.state.wis}</Text>
            <TouchableOpacity style={styles.button} onPress={this.increase.bind(this, this.state.wis,this.state.standard, 'wis')}>
              <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            </View>
            <Text>
              CHA + {this.character.race.cha}
            </Text>
            <View style={styles.rowFlex}>
            <TouchableOpacity style={styles.button} onPress={this.decrease.bind(this, this.state.cha,this.state.standard, 'cha')}>
              <Text style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
              <Text style={styles.pnt}>{this.state.cha}</Text>
            <TouchableOpacity style={styles.button} onPress={this.increase.bind(this, this.state.cha,this.state.standard, 'cha')}>
              <Text style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          color='#58170D'
          title="Next"
          onPress={() => {
            if (this.state.standard === 0){
              navigate('ThirdPage', {
                JSON_ListView_Clicked_Item: {character:this.character}
            })
          }else {
            alert('You still have points to distribute, please complete the distribution before continue.')
          }}
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#EEE5CE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
  },
  columnScreen: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  btnPlace: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center'
  },
  columnFlex: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  rowFlex: {
    flexDirection: 'row',
    flex: 1,

  },
  button: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#58170D',
    height: 30,
    width: 30
  },
  attTxt: {
    fontSize: 24,
    color: '#000000'
  },
  btnTxt: {
    color: 'white',
    fontSize: 20
  },
  pnt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 26,
  }
});