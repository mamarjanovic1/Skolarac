import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    email: '',
    password: '',
    ucenik: ["Martina", "martina"],
    profesor: ["Ana", "ana"],
  };


  onLogin() {
    if (this.state.ucenik[0] == this.state.email && this.state.ucenik[1] == this.state.password) {
      this.props.navigation.navigate(
        'HomeScreen',
        {
          email: this.state.email
        }
      );
    } else {
      if (this.state.profesor[0] == this.state.email && this.state.profesor[1] == this.state.password) {
        this.props.navigation.navigate(
          'HomeScreen',
          {
            email: this.state.email
          }
        );
      } else {
        Alert.alert('Neispravno korisničko ime ili lozinka');
      }
    }
  }

  render() {
    const resizeMode = 'cover';
    return (
      <ImageBackground style={styles.container} source={require('../img/LoginScreen.jpg')}>
        <Text style={styles.titleText}>Školarac</Text>
        <TextInput
          value={this.state.email}
          keyboardType='email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='E-mail'
          placeholderTextColor='white'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Lozinka'}
          secureTextEntry={true}
          placeholderTextColor='white'
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
        >
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'salmon',
    marginTop: -75
  },
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,

  },
  buttonText: {
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
