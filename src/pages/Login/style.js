// import React, {Component} from 'react'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4C3C6F',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    img: {
        marginBottom: 8
    },  
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 100
    },
    input: {
        backgroundColor: '#C4C4C4',
        margin: 10,
        height: 40,
        width: 294,
        borderRadius: 5
    },
    btnLogar: {
        backgroundColor: 'rgba(99, 184, 133, 0.17)',
        // backgroundOpacity: '17%',
        height: 36,
        width: 160,
        borderRadius: 10,
        marginTop: 50
    }, 
    textBtn: {
       textAlign: 'center',
       padding: 5,
       fontSize: 18,
       fontWeight: 'bold'

    },
    btnCadastrar: {
        fontSize: 18,
        fontWeight: 'bold',
    
    }
})

export default styles