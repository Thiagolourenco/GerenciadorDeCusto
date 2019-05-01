import React, { Component } from 'react';
import { View, Text, Image ,TextInput, TouchableOpacity} from 'react-native';
import styles from './style'
import firebase from '../../connect'

class CadastrarTarefas extends Component {

  constructor(props){
      super(props)
      this.state = {
        nome: '',
        diaCompra: 0,
        valor: 0,
        parcelas: 0
      }

      this.handleCadastrarDespesas = this.handleCadastrarDespesas.bind(this)

  }

  handleCadastrarDespesas(){
    if(this.state.nome.length > 0){
        let despesa = firebase.database().ref('Despesas')
        let chave = despesa.push().key

        despesa.child(chave).set({
            nome: this.state.nome,
            diaCompra: this.state.diaCompra,
            valor: this.state.valor,
            parcelas: this.state.parcelas
        })

        alert('Despesa Inserida Com Sucesso')
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
                <TextInput style={styles.input} placeholder="DIA DA COMPRA" onChangeText={(diaCompra) => this.setState({diaCompra})} />
                <TextInput style={styles.input} placeholder="VALOR DA COMPRA" onChangeText={(valor) => this.setState({valor})} keyboardType="numeric"/>
                <TextInput style={styles.input} placeholder="PARCELAS" onChangeText={(parcelas) => this.setState({parcelas})} keyboardType="numeric"/>

            </View>
            <TouchableOpacity style={{marginRight: 250, marginTop: 20}} onPress={() => this.props.navigation.goBack()}>
                <Image source={require('../../../assets/img/left.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCadastrar} onPress={this.handleCadastrarDespesas}>
                    <Text style={styles.textBtn}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

export default CadastrarTarefas