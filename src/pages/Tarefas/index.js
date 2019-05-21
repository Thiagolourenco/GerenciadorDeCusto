import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './style'
import firebase from '../../connect'

class Tarefas extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }
    
    componentDidMount(){
        firebase.database().ref('Tarefas').on('value', (snapshot) => {
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
    }

    // handleRemover(){
    //     let tarefa = firebase.database().ref('Tarefas')
    //     let key = tarefa.push().key

    //     tarefa.child(key).remove()
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../../../assets/img/menu-button-of-three-horizontal-lines.png')} style={styles.img}/>
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Tarefas</Text>
                </View>
                <FlatList 
                    data={this.state.list}
                    renderItem={({item}) => <ListaTarefa data={item}/>}
                    
                />
                <TouchableOpacity style={{marginLeft: 350, marginBottom: 15}} onPress={() => this.props.navigation.navigate('CadastrarTarefas')}>
                    <Image source={require('../../../assets/img/plus.png')} style={{width: 50, height: 50}}/>
                </TouchableOpacity>
            </View>
            )
        }
    }

class ListaTarefa extends Component {
    render(){
        const item = this.props.data

        return(
            <View style={styles.flatList}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.nomeTarefa}>{item.nome}</Text>
                    <Text style={styles.tempoTarefa}>{item.tempo}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.descricaoTarefa}>{item.descricao}</Text>
                    <TouchableOpacity onPress={() => firebase.database().ref('Tarefas').child(item.key).remove()}>
                        <Image source={require('../../../assets/img/x-button.png')} style={{marginTop: 5, marginRight: 10}}/>
                    </TouchableOpacity>
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
