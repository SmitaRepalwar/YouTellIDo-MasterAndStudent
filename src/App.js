import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Master from './components/Master'
import Student from './components/Student'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/master" component={Master} />
    <Route exact path="/student" component={Student} />
  </Switch>
)
export default App
