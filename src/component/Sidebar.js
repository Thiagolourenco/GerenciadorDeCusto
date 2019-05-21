import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import firebase from '../connect'

class Sidebar extends Component {

  handleSair = () => {
    setInterval(() => {
      firebase.auth().signOut()
      this.props.navigation.navigate('Login')
    }, 3000)
  }

  navLink(nav, text){ 
      return(
          <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)} style={{height: 50}}> 
              <Text style={styles.txtMenu}>{text}</Text>
          </TouchableOpacity>
      )
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.campoUsuario}>
            <Text style={styles.foto}></Text>
            <Text style={styles.nomeUsuario}> Usuário </Text>
        </View>
        <View style={styles.estiloMenu}>
            {this.navLink('Home', 'Home')}
            {this.navLink('Tarefas', 'Tarefas')}
            {this.navLink('Despesas', 'Despesas')}
        </View>
        <TouchableOpacity style={styles.botaoSair} onPress={this.handleSair}>
            <Text style={styles.btnTextSair}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#4C3C6F'
  },
  campoUsuario: {
    flex: 1, 
    backgroundColor: '#362C4D', 
    height: 150, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  foto: {
    backgroundColor: 'gray', 
    height: 80, 
    width: 80, 
    borderRadius: 40
  },
  nomeUsuario: {
    color: 'white', 
    fontSize: 18,  
    paddingTop: 15
  },
  estiloMenu: {
    flex: 1, 
    backgroundColor: '#4C3C6F', 
    paddingTop: 10
  },
  botaoSair: {
    flex: 1, 
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    marginTop: 230
  },
  btnTextSair: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginRight: 10
  },
  txtMenu: {
    flex: 1, 
    textAlign: 'left', 
    padding: 6, 
    fontSize: 18, 
    paddingLeft: 14, 
    margin: 5, 
    color: 'white'
  }
})

export default Sidebar
