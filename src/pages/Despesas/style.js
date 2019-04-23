import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4C3C6F',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#E74343',
        height: 53,
        justifyContent: 'center',
        alignItems: 'center'

    },
    flatList: {
        width: 390,
        height: 83,
        backgroundColor: 'rgba(196,196, 196, 0.3)',
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 10
    },
    nomeDespesas: {
        color: '#E5E290',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    tempoDespesas: {
        color: '#34FE30',
        fontWeight: '900',
        fontSize: 18,
        margin: 10,
    },
    descricaoDespesa: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 10
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(67,176,96,0.7)',
        height: 69,
        justifyContent: 'center',
        alignItems: 'center'

    },
})

export default styles

// 