import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export interface Props { }
export interface State { }

export class App extends React.Component<Props, State> {
  render() {
    return (
      <Wrapper>
        <Welcome>
          Welcome to React Native!
        </Welcome>
        <Instructions>
          To get started, edit App.js
        </Instructions>
        <Instructions>
          {instructions}
        </Instructions>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F4764F;
`

const Welcome = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});