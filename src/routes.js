import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation'

import Login from './pages/Login'
import Cadastrar from './pages/Cadastrar'
import Home from './pages/Home'
import Tarefas from './pages/Tarefas'
import CadastrarTarefas from './pages/CadastrarTarefas'
import Despesas from './pages/Despesas'
import CadastrarDespesas from './pages/CadastrarDespesas'

const AppNavigator = createStackNavigator({
        Login,
        Cadastrar,
        Home: createDrawerNavigator({
            Home,
            Tarefas,
            Despesas
        }),
        CadastrarTarefas,
        CadastrarDespesas

    }, {initialRouteName: 'Home'})

export default createAppContainer(AppNavigator)