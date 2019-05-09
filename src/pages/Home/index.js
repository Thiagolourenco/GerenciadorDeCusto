import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, FlatList } from 'react-native';
import styles from './style'
import firebase from '../../connect'

class Home extends Component {
  constructor(props){
      super(props)
      this.state = {
          list: [],
          listDespesa: []
      }  
  }

  componentDidMount(){
    firebase.database().ref('Tarefas').on('value', snapshot => {
        let state = this.state
        state.list = []

        snapshot.forEach((childItem) => {
            state.list.push({
                key: childItem.key,
                nome: childItem.val().nome,
                tempo: childItem.val().tempo,
                descricao: childItem.val().descricao
            })
        })

        this.setState(state)
    })

    firebase.database().ref('Despesas').on('value', snapshot => {
        let state = this.state
        state.listDespesa = []

        snapshot.forEach((childItem) => {
            state.listDespesa.push({
                key: childItem.key,
                nome: childItem.val().nome,
                valor: childItem.val().valor,
                diaCompra: childItem.val().diaCompra
            })
        })
        this.setState(state)
    })
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableHighlight onPress={() => this.props.navigation.openDrawer()}>
                    <Image source={require('../../../assets/img/menu-button-of-three-horizontal-lines.png')} style={styles.img}/>
                </TouchableHighlight>
                <Text style={styles.titulo}>Gerenciador de Rendas/Tasks</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.tituloTarefas}> Tarefas</Text>
                {/* View Exemplo, do FlatList */}
                <FlatList 
                    data={this.state.list}
                    renderItem={({item}) => <ListaTarefas data={item}/>}
                />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.tituloCusto}> Contas</Text>
                {/*FlatList */}
                <FlatList 
                    data={this.state.listDespesa}
                    renderItem={({item}) => <ListaDespesa data={item}/>}
                /> 
            </View>
        </View>
    );
  }
}

class ListaTarefas extends Component {
    render(){
        return(
            <View style={styles.flatList}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.nomeTarefa}>{this.props.data.nome}</Text>
                    <Text style={styles.tempoTarefa}>{this.props.data.tempo}</Text>
                </View>
                <Text style={styles.descricaoTarefa}>{this.props.data.descricao}</Text>
            </View>
        )
    }
}

class ListaDespesa extends Component {
    render(){
        return(
            <View style={styles.flatList}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.nomeConta}>{this.props.data.nome}</Text>
                    <Text style={styles.valorConta}>R$ {this.props.data.valor}</Text>
                </View>
                    <Text style={styles.diaConta}> {this.props.data.diaCompra}</Text>
             </View>
        )
    }
}

export default Home