import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {
  BgCon,
  Heading,
  Form,
  InputCon,
  Label,
  Input,
  Button,
  ErrorMsg,
} from './styledComponents'

const userOptions = [
  {id: 1, loginAs: 'Master'},
  {id: 2, loginAs: 'Student'},
]

class Login extends Component {
  state = {
    username: '',
    loginAs: userOptions[0].loginAs,
    password: '',
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeOption = event => {
    this.setState({loginAs: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()

    const {loginAs, username, password} = this.state
    if (username === '' || password === '') {
      this.setState({showError: true})
    } else {
      const {history} = this.props
      const userInfo = JSON.stringify({username, password, loginAs})
      localStorage.setItem('user_info', userInfo)
      if (loginAs === 'Master') {
        history.replace('/master')
      } else {
        history.replace('/student')
      }
    }
  }

  render() {
    const {username, password, showError} = this.state

    const userInfo = localStorage.getItem('user_info')
    if (userInfo !== null) {
      const parsedInfo = JSON.parse(userInfo)
      if (parsedInfo.loginAs === 'Student') {
        return <Redirect to="/student" />
      }
      return <Redirect to="/master" />
    }
    return (
      <BgCon>
        <Form>
          <Heading>You tell, I do</Heading>
          <InputCon>
            <Label htmlFor="input">Username</Label>
            <Input
              type="text"
              id="input"
              placeholder="please enter your name"
              value={username}
              onChange={this.onChangeUsername}
            />
          </InputCon>
          <InputCon>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </InputCon>
          <InputCon>
            <Label as="p">User Credentials</Label>
            <Input as="select" onChange={this.onChangeOption}>
              {userOptions.map(eachUser => (
                <Input as="option" value={eachUser.loginAs}>
                  {eachUser.loginAs}
                </Input>
              ))}
            </Input>
          </InputCon>
          <Button type="submit" onClick={this.onSubmit}>
            Login
          </Button>
          {showError && (
            <ErrorMsg>Please provide username and password</ErrorMsg>
          )}
        </Form>
      </BgCon>
    )
  }
}

export default Login
