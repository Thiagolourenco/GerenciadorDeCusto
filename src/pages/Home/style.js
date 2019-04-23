import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4C3C6F',
        flex: 1,
    },
    img: {
        width: 36,
        height: 31,
        margin: 10
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
        marginLeft: 30
    },
    tituloTarefas: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    tituloCusto: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 18

    },

    //  Estilos do Component tarefas

    flatList: {
        width: 390,
        height: 83,
        backgroundColor: 'rgba(196,196, 196, 0.3)',
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 5
    },
    nomeTarefa: {
        color: '#1B146E',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    tempoTarefa: {
        color: '#34FE30',
        fontWeight: '900',
        fontSize: 18,
        margin: 10
    },
    descricaoTarefa: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 10
    },

    nomeConta: {
        color: '#E5E290',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    valorConta: {
        color: '#34FE30',
        fontWeight: '900',
        fontSize: 18,
        margin: 10
    },
    diaConta: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 10
    }
})

export default styles;