import {withRouter} from 'react-router-dom'

import {Navbar, Heading, Button} from './styledComponents'

const Header = props => {
  const {history} = props

  const userInfo = localStorage.getItem('user_info')
  const parsedInfo = JSON.parse(userInfo)
  const {loginAs} = parsedInfo

  const onLogout = () => {
    localStorage.removeItem('user_info')
    history.replace('/login')
  }

  return (
    <Navbar>
      <Heading>{loginAs}</Heading>
      <Button type="button" onClick={onLogout}>
        Logout
      </Button>
    </Navbar>
  )
}

export default withRouter(Header)
