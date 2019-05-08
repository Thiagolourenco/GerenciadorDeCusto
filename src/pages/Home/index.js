import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, FlatList } from 'react-native';
import styles from './style'
import firebase from '../../connect'

class Home extends Component {
  constructor(props){
      super(props)
      this.state = {
          list: []
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

        this.setState({state})
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
                    renderItem={({item}) => <Lista}
                />
            <View style={{flex: 1}}>
                <Text style={styles.tituloCusto}> Contas</Text>
                <View style={styles.flatList}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.nomeConta}>Nome Da Conta</Text>
                        <Text style={styles.valorConta}>R$ 00,00</Text>
                    </View>
                        <Text style={styles.diaConta}>Dia Da Compra && QNT X</Text>
                    </View>
                <View style={styles.flatList}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.nomeConta}>Nome Da Conta</Text>
                        <Text style={styles.valorConta}>R$ 00,00</Text>
                    </View>
                        <Text style={styles.diaConta}>Dia Da Compra && QNT X</Text>
                    </View>
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
                    <Text style={styles.nomeTarefa}></Text>
                    <Text style={styles.tempoTarefa}>Tempo</Text>
                </View>
                <Text style={styles.descricaoTarefa}>Descricao</Text>
            </View>
        )
    }
}
Home.navigationOptions = {
    header: null
}

export default Home