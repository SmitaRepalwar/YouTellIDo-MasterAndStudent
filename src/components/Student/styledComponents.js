import styled from 'styled-components'

export const BgCon = styled.div`
  height: 100vh;
  width: 100%;
`
export const BottomCon = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 45px;
  color: #00cccc;
`
