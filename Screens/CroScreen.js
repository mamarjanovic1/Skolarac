import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, Image, View } from 'react-native';

const checkImage = require('../img/check.png');
const uncheckImage = require('../img/uncheck.png');

export default class CroScreen extends Component {
    static navigationOptions = {
        header: null
        }
     state = {
        image1: uncheckImage,
        image2: uncheckImage,
      };

      checkZ1() {
        if ( this.state.image1 == uncheckImage){
          this.setState({image1 : checkImage})
        }else{
          this.setState({image1 : uncheckImage})
        }
      }
      checkZ2() {
        if ( this.state.image2 == uncheckImage){
          this.setState({image2 : checkImage})
        }else{
          this.setState({image2 : uncheckImage})
        }
      }


  render() {
    const resizeMode = 'cover';
    return (
      <ImageBackground style={styles.container} source={require('../img/CroScreen.jpg')}>

        <Text style={styles.titleText}><Image source={require("../img/croatian.png")} />Hrvatski jezik:</Text>
        <View style={styles.board}>
          <View >
            <TouchableOpacity style={styles.buttonCheck}  onPress={this.checkZ1.bind(this)}>
              <Text style={styles.buttonCheckText}><Image source={this.state.image1} /> Zadaća 1 </Text>
              <Text style={styles.buttonCheckBoldDescriptionText}>Opis: <Text style={styles.buttonCheckDescriptionText}> Čitanka stranica 15, zadatak 2. </Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCheck} onPress={this.checkZ2.bind(this)}>
              <Text style={styles.buttonCheckText}><Image source={this.state.image2} /> Zadaća 2 </Text>
              <Text style={styles.buttonCheckBoldDescriptionText}>Opis: <Text style={styles.buttonCheckDescriptionText}> Sastavak na temu "Što je jesen" </Text></Text>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  board: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '80%',
    paddingBottom: 20
  },
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 55,
    marginBottom: 20,
  },
  button: {
    alignItems: 'flex-start',
    backgroundColor: 'powderblue',
    width: '60%',
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: -40,
    marginLeft: 50,
  },
  buttonCheck: {
    alignItems: 'flex-start',
    width: '100%',
    height: 70,
    paddingLeft:20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  buttonCheckText:{
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  buttonCheckDescriptionText:{
    fontFamily: 'Baskerville',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    color: 'gray'
  },
  buttonCheckBoldDescriptionText:{
    fontFamily: 'Baskerville',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    color: 'gray',
    paddingTop: 10
  }
});
