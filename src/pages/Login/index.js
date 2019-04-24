import React, {Component} from 'react'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from './style'
import firebase from '../../connect'

class Login extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            email: '',
            senha: ''
        }

        this.handleLogar = this.handleLogar.bind(this)
    }

    handleLogar(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.props.navigation.navigate('Home')
            }
        })

        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) => {
            if(error.code == 'auth/wrong-password'){
                alert('Senha errada, tentar novamente')
            }else if(error.code == 'auth/user-not-found'){
                alert('Usuário Incorreto')
            }else{
                alert(error.code)
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../../assets/img/logo.png')} style={styles.img}/> 
                <Text style={styles.titulo}>Gerenciador de Custos/Tasks</Text>
                <TextInput style={styles.input} placeholder="LOGIN" onChangeText={(email) => this.setState({email})}/>
                <TextInput style={styles.input} placeholder="************" secureTextEntry onChangeText={(senha) => this.setState({senha})}/>
                <TouchableOpacity style={{marginStart: 200}} onPress={() => this.props.navigation.navigate('Cadastrar')}>
                    <Text style={styles.btnCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogar} onPress={this.handleLogar}>
                    <Text style={styles.textBtn}>LOGAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Login.navigationOptions = {
    header: null
}

export default Login