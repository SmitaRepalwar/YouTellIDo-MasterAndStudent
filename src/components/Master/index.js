import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {v4} from 'uuid'
import {
  BgCon,
  Heading,
  BottomCon,
  Span,
  InputCon,
  Input,
  Button,
  QuestionCon,
  ListItem,
} from './styledComponents'
import Header from '../Header'

const borderColors = [
  '#ff66cc',
  '#ffff33',
  '#1affa3',
  '#ff3333',
  '#d11aff',
  '#3333ff',
]

class Master extends Component {
  state = {taskList: [], userInput: ''}

  storeInLocal = () => {
    const {taskList} = this.state

    const stringifiedList = JSON.stringify(taskList)
    localStorage.setItem('taskList', stringifiedList)
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onCalculations = () => {
    const zero = () => 0
    const one = () => 1
    const two = () => 2
    const three = () => 3
    const four = () => 4
    const five = () => 5
    const six = () => 6
    const seven = () => 7
    const eight = () => 8
    const nine = () => 9
    const times = () => '*'
    const plus = () => '+'
    const minus = () => '-'
    const devidedBy = () => '/'

    const onReturnValue = n => {
      switch (n) {
        case 'zero':
          return zero()
        case 'one':
          return one()
        case 'two':
          return two()
        case 'three':
          return three()
        case 'four':
          return four()
        case 'five':
          return five()
        case 'six':
          return six()
        case 'seven':
          return seven()
        case 'eight':
          return eight()
        case 'nine':
          return nine()
        case 'plus':
          return plus()
        case 'minus':
          return minus()
        case 'times':
          return times()
        case 'devidedBy':
          return devidedBy()
        default:
          return null
      }
    }

    const {userInput} = this.state

    const myArray = userInput.split('(')
    const newArray = myArray.slice(0, 3)

    const firstNum = onReturnValue(newArray[0])
    const operator = onReturnValue(newArray[1])
    const secondNum = onReturnValue(newArray[2])

    if (firstNum === null || operator === null || secondNum === null) {
      alert('Please Enter Valid Input')
    } else {
      const calculation = `${firstNum} ${operator} ${secondNum}`

      let value

      switch (operator) {
        case '+':
          value = firstNum + secondNum
          break
        case '-':
          value = firstNum - secondNum
          break
        case '*':
          value = firstNum * secondNum
          break
        case '/':
          value = Math.floor(firstNum / secondNum)
          break
        default:
          value = null
      }

      const colorLength = borderColors.length
      const colorNum = Math.floor(Math.random() * colorLength)
      const color = borderColors[colorNum]
      const result = {calculation, value, id: v4(), color}
      this.setState(
        prevState => ({taskList: [...prevState.taskList, result]}),
        this.storeInLocal,
      )
    }
  }

  render() {
    const {userInput, taskList} = this.state
    const userInfo = localStorage.getItem('user_info')
    const parsedInfo = JSON.parse(userInfo)
    if (parsedInfo.loginAs === 'Student') {
      return <Redirect to="/student" />
    }
    if (userInfo === null) {
      return <Redirect to="/login" />
    }

    return (
      <BgCon>
        <Header />
        <BottomCon>
          <Heading>Todays Task For Students</Heading>
          <Heading>
            <Span>CREATE </Span>Task
          </Heading>
          <InputCon>
            <Input
              type="text"
              onChange={this.onChangeInput}
              value={userInput}
            />
          </InputCon>
          <Button type="button" onClick={this.onCalculations}>
            Add
          </Button>
          <QuestionCon>
            {taskList.map(eachItem => (
              <ListItem key={eachItem.id} color={eachItem.color}>
                {eachItem.calculation} = {eachItem.value}
              </ListItem>
            ))}
          </QuestionCon>
        </BottomCon>
      </BgCon>
    )
  }
}

export default Master
