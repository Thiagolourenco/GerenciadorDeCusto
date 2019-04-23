import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './style'

class Home extends Component {
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
                <View style={styles.flatList}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.nomeTarefa}>Nome Da Tarefa</Text>
                        <Text style={styles.tempoTarefa}>Tempo</Text>
                    </View>
                        <Text style={styles.descricaoTarefa}>Descricao</Text>
                </View>
                <View style={styles.flatList}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.nomeTarefa}>Nome Da Tarefa</Text>
                        <Text style={styles.tempoTarefa}>Tempo</Text>
                    </View>
                        <Text style={styles.descricaoTarefa}>Descricao</Text>
                    </View>
                </View>
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

Home.navigationOptions = {
    header: null
}

export default Home