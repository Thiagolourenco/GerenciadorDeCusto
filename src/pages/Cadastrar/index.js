import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import firebase from '../../connect'

class Cadastrar extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: '',
      salario: 0
    }

    this.handleCadastro = this.handleCadastro.bind(this)
  }

  handleCadastro(){
    if(this.state.nome != '' && this.state.email != '' && this.state.senha != '' && this.state.salario != 0){
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          firebase.database().ref('Usuario').child(user.uid).set({
            nome: this.state.nome,
            salario: this.state.salario
          })

          alert("Usuário Cadastrado Com Sucesso")
        }
      })

      firebase.auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.senha
      ).catch((error) => {
          alert(error.code)
      })
    }
  }



  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../../../assets/img/logo.png')} style={styles.img}/> 
            <Text style={styles.titulo}>CADASTRO</Text>
          </View>
          <TextInput style={styles.input} placeholder="NOME" onChangeText={(nome) => this.setState({nome})}/>
          <TextInput style={styles.input} placeholder="E-MAIL" onChangeText={(email) => this.setState({email})}/>
          <TextInput style={styles.input} placeholder="***********" secureTextEntry onChangeText={(senha) => this.setState({senha})}/>
          <TextInput style={styles.input} placeholder="SÁLARIO ATUAL" keyboardType="numeric" onChangeText={(salario) => this.setState({salario})}/>
          <TouchableOpacity style={styles.btnCadastrar} onPress={this.handleCadastro}>
              <Text style={styles.textBtn}>CADASTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../../assets/img/left.png')}  style={{width: 35, height: 35}}/>
          </TouchableOpacity>
      </View>
    )
  }
}

Cadastrar.navigationOptions = {
  header: null
}

export default Cadastrar