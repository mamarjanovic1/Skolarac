import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';


export default class HomeScreen extends Component {


    static navigationOptions = {
        header: null
        }
  
  
  mathClick() {
    this.props.navigation.navigate (
        'MathScreen'
        );
  }
  croClick() {
    this.props.navigation.navigate (
        'CroScreen'
        );
  }
  natureClick() {
    this.props.navigation.navigate (
        'NatureScreen'
        );
  }

  render() {
    const { navigation } = this.props;
    const email = navigation.getParam('email', 'none');
    const resizeMode = 'cover';
    return (
      <ImageBackground style={styles.container} source={require('../img/HomeScreen.jpg')}>
      <Text style={styles.titleText}>Predmeti : </Text>
     
        <TouchableOpacity style={styles.button} onPress={this.mathClick.bind(this)}>
        <Text style={styles.buttonText}><Image style={styles.imageButton} source={require("../img/math.png")}/> Matematika </Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={this.croClick.bind(this)}>
        <Text style={styles.buttonText}><Image style={styles.imageButton} source={require("../img/croatian.png")}/> Hrvatski </Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={this.natureClick.bind(this)}>
        <Text style={styles.buttonText}><Image style={styles.imageButton} source={require("../img/nature.png")}/> Priroda i društvo </Text>
       </TouchableOpacity>
       <Text style={styles.userText}>Korisnik : {email}</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleText:{
    fontFamily: 'Baskerville',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: -10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  userText:{
    fontFamily: 'Baskerville',
    fontSize: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'lightgray',
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 10,
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
  buttonText:{
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -17,
    width: '100%',
  },
});
