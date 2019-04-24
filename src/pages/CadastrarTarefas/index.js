import React, { Component } from 'react';
import { View, Text, Image ,TextInput, TouchableOpacity } from 'react-native';
import styles from './style'
import firebase from '../../connect'

class CadastrarTarefas extends Component {

  constructor(props){
      super(props)
      this.state = {
            nome: '',
            tempo: 0,
            descricao: '',
            dataInicio:'',
            dataFim: '',
            prioridade: ''
      }

      this.handleCadastrarTarefas = this.handleCadastrarTarefas.bind(this)
  }

  handleCadastrarTarefas(){
    if(this.state.nome != '' && this.state.tempo != 0 && this.state.descricao != '' && this.state.dataInicio != '' && this.state.dataFim != '' &&  this.state.prioridade != ''){

    }
  }
  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>  
                <Image source={require('../../../assets/img/logo.png')} style={{width: 30, height: 37}}/>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10}}>Adicionar Tarefas</Text>
            </View>
            <View style={{marginTop: 20}}>
                <TextInput style={styles.input} placeholder="NOME" onChangeText={(nome) => this.setState({nome})}/>
                <TextInput style={styles.input} placeholder="TEMPO" onChangeText={(tempo) => this.setState({tempo})}/>
                <TextInput style={styles.input} placeholder="DESCRIÇÂO" onChangeText={(descricao) => this.setState({descricao})}/>
                <TextInput style={styles.input} placeholder="DATA INICIO" onChangeText={(dataInicio) => this.setState({dataInicio})}/>
                <TextInput style={styles.input} placeholder="DATA FIM" onChangeText={(dataFim) => this.setState({dataFim})}/>
                <TextInput style={styles.input} placeholder="PRIORIDADE" onChangeText={(prioridade) => this.setState({prioridade})}/>
            </View>
            <TouchableOpacity style={{marginRight: 250, marginTop: 20}} onPress={() => this.props.navigation.goBack()}>
                <Image source={require('../../../assets/img/left.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCadastrar} onPress={this.handleCadastrarTarefas}>
                    <Text style={styles.textBtn}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

export default CadastrarTarefas