import React, {Component} from 'react'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from './style'

class Login extends Component{
   
    constructor(props){
        super(props)
        this.state = {}

    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../../assets/img/logo.png')} style={styles.img}/> 
                <Text style={styles.titulo}>Gerenciador de Custos/Tasks</Text>
                <TextInput style={styles.input} placeholder="LOGIN"/>
                <TextInput style={styles.input} placeholder="************" secureTextEntry/>
                <TouchableOpacity style={{marginStart: 200}} onPress={() => this.props.navigation.navigate('Cadastrar')}>
                    <Text style={styles.btnCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogar} onPress={() => this.props.navigation.navigate('Home')}>
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