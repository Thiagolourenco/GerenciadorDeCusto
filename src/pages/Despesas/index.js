import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from './style'
import firebase from '../../connect'

class Despesas extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [],
      salario: "...",
      despesas: "0"
    }
    this.handleRemover = this.handleRemover.bind(this)
  }

  componentDidMount(){
    firebase.database().ref('Despesas').on('value', (snapshot) => {
      let state = this.state
      state.list = []

      snapshot.forEach((childItem) => {
        state.list.push({
          key: childItem.key,
          nome: childItem.val().nome,
          parcelas: childItem.val().parcelas,
          diaCompra: childItem.val().diaCompra,
          valor: childItem.val().valor
        })
      })


      this.setState(state)
    })

    firebase.database().ref('Usuario/DhKPLGMHz2Yf5LopANEvsCsfjhf2/salario').once('value', (snapshot) => {
      let state = this.state
      state.salario = snapshot.val()

      this.setState(state)
    })  
  }

  // handleRemover(item){
  //   firebase.database().ref('Despesas').child(item).remove()

  //   alert("Despesa removida Com Sucesso")
  // }
  handleRemover(item){
    setInterval(() => {
      firebase.database().ref('Despesas').child(item).remove()
    }, 5000)
    alert("Despesa Removido Com Sucesso")
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              {/* <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{marginRight: 180}}>
                      <Image source={require('../../../assets/img/menu-button-of-three-horizontal-lines.png')} style={styles.img}/>
              </TouchableOpacity> */}
              {/* <View style={{flexDirection: 'row'}}> */}
                <Image source={require('../../../assets/img/money-bag.png')} style={{width: 35, height: 40, marginRight: 20}}/>
                <Text style={{fontSize: 24, fontWeight: 'bold' }}>R$ {this.state.salario}</Text>
              {/* </View> */}
            </View>
            <FlatList 
                data={this.state.list}
                renderItem={({item}) => <ListaDespesas data={item}/>}
            
            />
            <View style={styles.footer}>
              <Image source={require('../../../assets/img/money.png')} style={{width: 35, height: 40, marginRight: 15}}/>
              <Text style={{fontSize: 24, fontWeight: 'bold' }}>R$ {this.state.despesas}</Text>
              <TouchableOpacity style={{marginLeft: 170}} onPress={() => this.props.navigation.navigate('CadastrarDespesas')}>
                <Image source={require('../../../assets/img/plus.png')} style={{width: 50, height: 50}}/>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

class ListaDespesas extends Component {
  render(){
      const item = this.props.data

      return(
      <View style={styles.flatList}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.nomeDespesas}>{item.nome}</Text>
              <Text style={styles.tempoDespesas}>{item.valor}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.descricaoDespesa}>{item.parcelas}</Text>
              <TouchableOpacity onPress={() => firebase.database().ref('Despesas').child(item.key).remove()}>
                  <Image source={require('../../../assets/img/x-button.png')} style={{marginTop: 5, marginRight: 10}}/>
              </TouchableOpacity>
          </View>
      </View>
      )
  }
}


export default Despesas
