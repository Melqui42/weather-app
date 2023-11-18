import { StatusBar, Dimensions } from 'react-native'

import styled from 'styled-components/native'

const StatusBarHeight = StatusBar.currentHeight || 0

const { height, width } = Dimensions.get('window')

export const Screen = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5ecf4;
  padding-top: ${StatusBarHeight}px;
`
export const Center = styled.View`
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Top = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const CityName = styled.Text`
  color: #181e2a;
  font-size: ${height * 0.04};
  font-family: 'roboto300Light';
`
export const Time = styled.Text`
  color: #181e2a;
  font-size: ${height * 0.03};
  font-family: 'roboto400Regular';
`

export const Image = styled.Image`
  margin-bottom: 40px;
`

export const LineHorizontal = styled.View`
  width: ${width * 0.1};
  background-color: #86898e;
  height: ${height * 0.0018};
  margin-top: ${width * 0.08};
`

export const Information = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Temperature = styled.Text`
  color: #181e2a;
  font-size: ${height * 0.1};
  font-family: 'roboto400Regular';
`
export const Description = styled.Text`
  color: #86898e;
  text-align: center;
  width: ${width * 0.5};
  font-size: ${height * 0.025};
  font-family: 'roboto400Regular';
`

export const ClimateData = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const LineVertical = styled.View`
  width: ${width * 0.003};
  height: ${height * 0.03};
  background-color: #525864;
  margin-left: ${width * 0.04};
  margin-right: ${width * 0.04};
`
export const Card = styled.View`
  display: flex;
  align-items: center;
  text-align: center;
`
export const CardTitle = styled.Text`
  color: #525864;
  font-size: ${height * 0.015};
  margin-top: ${height * 0.005};
  margin-bottom: ${height * 0.005};
  font-family: 'roboto400Regular';
`
export const CardData = styled.Text`
  color: #525864;
  font-size: ${height * 0.02};
  font-family: 'roboto400Regular';
`
