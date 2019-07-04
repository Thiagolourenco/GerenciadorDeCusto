import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

class Config extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}> Usuário </Text>
                <View style={styles.conteudo}>
                    <TouchableOpacity style={styles.foto} onPress={() => {}}>

                    </TouchableOpacity>
                    <Text style={styles.label}>Nome</Text>
                    <Text style={styles.labelText}>Thiago Lourenço</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', marginRight: 120}}>
                            <Text style={styles.label}>Salario</Text>
                            <Text style={styles.labelText}>R$ 0,0</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.label}>Data de Nascimento</Text>
                            <Text style={styles.labelText}>27/02/1998</Text>
                        </View>
                    </View>
                    <Text style={styles.label}>E-Mail</Text>
                    <Text style={styles.labelText}>thiagolourencosaraiva@gmail.com</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4C3C6F',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        // marginTop: 5,
        marginTop: 5
    },
    conteudo: {
        flex: 1,
        marginTop: 30,
        marginLeft: 20
    },  
    foto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        marginLeft: 130,
        backgroundColor: '#CCC',
        marginBottom: 30
    },
    label: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10
    },
    labelText: {
        fontSize: 18,
        color: '#CCC',
        fontWeight: '900'
    }
})

export default Config