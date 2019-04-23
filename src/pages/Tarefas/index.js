import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, FlatList } from 'react-native';
import styles from './style'

class Tarefas extends Component {

    state = {
        list: [
            {
                key: 1,
                nome: 'Nome Da Tarefa',
                tempo: 0,
                desc: 'Descricao'
            },
            {
                key: 2,
                nome: 'Nome Da Tarefa',
                tempo: 0,
                desc: 'Descricao'
            },
            {
                key: 3,
                nome: 'Nome Da Tarefa',
                tempo: 0,
                desc: 'Descricao'
            },
            {
                key: 4,
                nome: 'Nome Da Tarefa',
                tempo: 0,
                desc: 'Descricao'
            },
            
            
        ]
    }
  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableHighlight onPress={() => this.props.navigation.openDrawer()}>
                    <Image source={require('../../../assets/img/menu-button-of-three-horizontal-lines.png')} style={styles.img}/>
                </TouchableHighlight>
                <Text style={styles.titulo}>Tarefas</Text>
            </View>
            <FlatList 
                data={this.state.list}
                renderItem={({item}) => <ListaTarefa data={item}/>}
            />
            <TouchableHighlight style={{marginLeft: 350, marginBottom: 15}} onPress={() => this.props.navigation.navigate('CadastrarTarefas')}>
                <Image source={require('../../../assets/img/plus.png')} style={{width: 50, height: 50}}/>
            </TouchableHighlight>
        </View>
    )
  }
}

class ListaTarefa extends Component {
    render(){
        return(
        <View style={styles.flatList}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.nomeTarefa}>{this.props.data.nome}</Text>
                <Text style={styles.tempoTarefa}>{this.props.data.tempo}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.descricaoTarefa}>{this.props.data.desc}</Text>
                <TouchableHighlight>
                    <Image source={require('../../../assets/img/x-button.png')} style={{marginTop: 5}}/>
                </TouchableHighlight>
            </View>
        </View>
        )
    }
}

Tarefas.navigationOptions = {
    title: 'Tarefas',
    drawerLabel: 'Tarefas',
}


export default Tarefas
