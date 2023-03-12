import styled from 'styled-components'

export const BgCon = styled.div`
  height: 100vh;
  width: 100%;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #00e6e6;
`
export const BottomCon = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Span = styled.span`
  color: #00e6b8;
`
export const InputCon = styled.div`
  height: 30px;
  width: 300px;
`
export const Input = styled.input`
  height: 30px;
  width: 300px;
  border: 2px solid #bfbfbf;
  border-radius: 5px;
  outline: none;
  padding: 5px;
`
export const Button = styled.button`
  height: 30px;
  width: 80px;
  background-color: #00cccc;
  color: #ffffff;
  outline: none;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
  margin-left: 210px;
`
export const QuestionCon = styled.ul`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`
export const ListItem = styled.li`
  list-style-type: none;
  height: 20px;
  width: 20%;
  border-right: 5px solid ${props => props.color};
  border-left: 5px solid ${props => props.color};
  border-radius: 20px;
  text-align: center;
  margin: 10px;
  margin-right: 40px;
  color: #660066;
  font-weight: bolder;
`
