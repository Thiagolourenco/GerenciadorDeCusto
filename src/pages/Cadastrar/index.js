import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style'
// import firebase from '../connect'


class Cadastrar extends Component {
  constructor(props){
    super(props)
    this.state = {}
    
  }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../../../assets/img/logo.png')} style={styles.img}/> 
            <Text style={styles.titulo}>CADASTRO</Text>
          </View>
          <TextInput style={styles.input} placeholder="NOMOE"/>
          <TextInput style={styles.input} placeholder="E-MAIL"/>
          <TextInput style={styles.input} placeholder="***********" secureTextEntry/>
          <TextInput style={styles.input} placeholder="SÁLARIO ATUAL" keyboardType="numeric"/>
          <TouchableOpacity style={styles.btnCadastrar} onPress={this.handleCadastro}>
              <Text style={styles.textBtn}>CADASTRAR</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

Cadastrar.navigationOptions = {
  header: null
}

export default Cadastrar