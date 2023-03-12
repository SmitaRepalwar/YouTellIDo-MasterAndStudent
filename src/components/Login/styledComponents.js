import styled from 'styled-components'

export const BgCon = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'bree serif';
  color: #00cccc;
  font-style: italic;
  font-size: 35px;
`
export const Form = styled.form`
  height: 400px;
  width: 300px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputCon = styled.div`
  height: 80px;
  width: 100%;
`
export const Label = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  color: #004d4d;
  font-weight: bold;
  margin-bottom: 0px;
`
export const Input = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  outline: none;
  padding: 5px;
`
export const Button = styled.button`
  height: 30px;
  width: 100%;
  background-color: #00cccc;
  color: #ffffff;
  outline: none;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-weight: bold;
  font-size: 12px;
`
