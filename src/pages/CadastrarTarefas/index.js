import React, { Component } from 'react';
import { View, Text, Image ,TextInput, TouchableOpacity, Picker} from 'react-native';
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
            prioridade: 0,
            prioridades: [
              {nome: 'Baixa'},
              {nome: 'Média'},
              {nome: 'Alta'}
            ]
      }

      this.handleCadastrarTarefas = this.handleCadastrarTarefas.bind(this)
  }

  handleCadastrarTarefas(){
    if(this.state.nome.length > 0){
        let tarefa = firebase.database().ref('Tarefas')
        let chave = tarefa.push().key
        
        tarefa.child(chave).set({
            nome: this.state.nome,
            tempo: this.state.tempo,
            descricao: this.state.descricao,
            dataInicio: this.state.dataInicio,
            dataFim: this.state.dataFim,
            prioridades: this.state.prioridade
        })

        alert('Despesa Inserida Com Sucesso')
    }
  }
  render() {

    let prioridadesItems = this.state.prioridades.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} style={{fontSize: 20, fontWeight: 'bold'}}
      />
    })
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
                <Text style={{fontSize: 20, marginLeft:10, fontWeight: 'bold'}}>Prioridades</Text> 
                <Picker 
                  selectedValue={this.state.prioridade}
                  style={{fontSize: 20, fontWeight: 'bold'}}
                  onValueChange={(itemValue, itemIndex) => 
                      this.setState({prioridade: itemValue})
                    }
                >
                  {prioridadesItems}

                </Picker>
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