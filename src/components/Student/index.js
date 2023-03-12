import {Redirect} from 'react-router-dom'
import Header from '../Header'
import {
  BgCon,
  BottomCon,
  QuestionCon,
  ListItem,
  Heading,
} from './styledComponents'

const Student = () => {
  const list = localStorage.getItem('taskList')
  const taskList = JSON.parse(list)

  const userInfo = localStorage.getItem('user_info')
  const parsedInfo = JSON.parse(userInfo)
  if (parsedInfo.loginAs === 'Master') {
    return <Redirect to="/master" />
  }
  if (userInfo === null) {
    return <Redirect to="/login" />
  }

  return (
    <BgCon>
      <Header />
      <BottomCon>
        {taskList.length > 0 ? (
          <QuestionCon>
            {taskList.map(eachItem => (
              <ListItem key={eachItem.id} color={eachItem.color}>
                {eachItem.calculation} = {eachItem.value}
              </ListItem>
            ))}
          </QuestionCon>
        ) : (
          <Heading>No Tasks Found</Heading>
        )}
      </BottomCon>
    </BgCon>
  )
}

export default Student
