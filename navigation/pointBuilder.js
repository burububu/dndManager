
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
    this.race = this.props.navigation.state.params.JSON_ListView_Clicked_Item.character.race;
    this.clas = this.props.navigation.state.params.JSON_ListView_Clicked_Item.character.clas;
    this.background = this.props.navigation.state.params.JSON_ListView_Clicked_Item.character.background;
    this.attributes = {};
    this.modifiers = {};
    this.state ={
      standard: 27,
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wis: 8,
      cha: 8,
      character: {
        race: this.race,
        clas: this.clas,
        background: this.background,
        attributes: this.attributes,
        modifiers: this.modifiers
      }
    }

  }
  static navigationOptions = {
    title: 'Point Builder',
  };

  async updateValues (){   
    let strAtt = (this.race.str + this.state.str)
    let dexAtt = (this.race.dex + this.state.dex)
    let conAtt = (this.race.con + this.state.con)
    let intAtt = (this.race.int + this.state.int)
    let wisAtt = (this.race.wis + this.state.wis)
    let chaAtt = (this.race.cha + this.state.cha)

    let strMod = Math.floor((strAtt-10)/2)
    let dexMod = Math.floor((dexAtt-10)/2)
    let conMod = Math.floor((conAtt-10)/2)
    let intMod = Math.floor((intAtt-10)/2)
    let wisMod = Math.floor((wisAtt-10)/2)
    let chaMod = Math.floor((chaAtt-10)/2)


    let att = {
      str: strAtt,
      dex: dexAtt,
      con: conAtt,
      int: intAtt,
      wis: wisAtt,
      cha: chaAtt
    }

    let mod = {
      str: strMod,
      dex: dexMod,
      con: conMod,
      int: intMod,
      wis: wisMod,
      cha: chaMod
    }
    return {att, mod}
  }

  //MODIFIERS
  async updateCharacter () {
    const values = await this.updateValues();
    this.setState(prevState => ({
      character: {                   
          ...prevState.character,    
          attributes: values.att
      }
    }))
    this.setState(prevState => ({
      character: {                   
          ...prevState.character,    
          modifiers: values.mod
      }
    }));
  }

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
              STR + {this.state.character.race.str}
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
              DEX + {this.state.character.race.dex}
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
              CON + {this.state.character.race.con}
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
              INT + {this.state.character.race.int}
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
              WIS + {this.state.character.race.wis}
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
              CHA + {this.state.character.race.cha}
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
          onPress={async () => {
            if (this.state.standard === 0){
              await this.updateCharacter(this);
              navigate('ThirdPage', {
                 JSON_ListView_Clicked_Item: {character: this.state.character}
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