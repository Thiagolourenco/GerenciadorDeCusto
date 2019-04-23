import React, { Component } from 'react';
import { View, Text, Image ,TextInput, TouchableOpacity } from 'react-native';
import styles from './style'

class CadastrarTarefas extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>  
                <Image source={require('../../../assets/img/logo.png')} style={{width: 30, height: 37}}/>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10}}>Adicionar Tarefas</Text>
            </View>
            <View style={{marginTop: 20}}>
                <TextInput style={styles.input} placeholder="NOME"/>
                <TextInput style={styles.input} placeholder="TEMPO"/>
                <TextInput style={styles.input} placeholder="DESCRIÇÂO" />
                <TextInput style={styles.input} placeholder="DATA INICIO"/>
                <TextInput style={styles.input} placeholder="DATA FIM"/>
                <TextInput style={styles.input} placeholder="PRIORIDADE"/>
            </View>
            <TouchableOpacity style={{marginRight: 250, marginTop: 20}} onPress={() => this.props.navigation.goBack()}>
                <Image source={require('../../../assets/img/left.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCadastrar} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.textBtn}>LOGAR</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

export default CadastrarTarefas