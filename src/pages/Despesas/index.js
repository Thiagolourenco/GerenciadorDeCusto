import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableHighlight} from 'react-native';
import styles from './style'

class Despesas extends Component {
  state = {
    list: [
        {
            key: 1,
            nome: 'Nome Da Tarefa',
            tempo: 0,
            desc: 'Dia de Compra'
        },
        {
            key: 2,
            nome: 'Nome Da Tarefa',
            tempo: 0,
            desc: 'Dia de Compra'
        },
        {
            key: 3,
            nome: 'Nome Da Tarefa',
            tempo: 0,
            desc: 'Dia de Compra'
        },
        {
            key: 4,
            nome: 'Nome Da Tarefa',
            tempo: 0,
            desc: 'Dia de Compra'
        },
        
        
    ]
}
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Image source={require('../../../assets/img/money-bag.png')} style={{width: 35, height: 40, marginRight: 20}}/>
              <Text style={{fontSize: 24, fontWeight: 'bold' }}>R$ 200,00</Text>
            </View>
            <FlatList 
                data={this.state.list}
                renderItem={({item}) => <ListaTarefa data={item}/>}
            />
            <View style={styles.footer}>
              <Image source={require('../../../assets/img/money.png')} style={{width: 35, height: 40, marginRight: 15}}/>
              <Text style={{fontSize: 24, fontWeight: 'bold' }}>R$ 200,00</Text>
              <TouchableHighlight style={{marginLeft: 170}} onPress={() => this.props.navigation.navigate('CadastrarDespesas')}>
                <Image source={require('../../../assets/img/plus.png')} style={{width: 50, height: 50}}/>
              </TouchableHighlight>
            </View>
        </View>
    );
  }
}

class ListaTarefa extends Component {
  render(){
      return(
      <View style={styles.flatList}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.nomeDespesas}>{this.props.data.nome}</Text>
              <Text style={styles.tempoDespesas}>{this.props.data.tempo}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.descricaoDespesa}>{this.props.data.desc}</Text>
              <TouchableHighlight>
                  <Image source={require('../../../assets/img/x-button.png')} style={{marginTop: 5, marginRight: 10}}/>
              </TouchableHighlight>
          </View>
      </View>
      )
  }
}

export default Despesas
