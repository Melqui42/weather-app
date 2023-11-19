import { StatusBar, Dimensions } from 'react-native'
import Entyo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styled from 'styled-components/native'

const StatusBarHeight = StatusBar.currentHeight || 0

const { height, width } = Dimensions.get('window')

export const StyledStatusBar = styled(StatusBar).attrs((props) => ({
  barStyle: props.theme.StyledStatusBar,
  translucent: true,
  backgroundColor: 'transparent',
}))``

export const Screen = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
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
  color: ${(props) => props.theme.top.cityName};
  font-size: ${height * 0.04};
  font-family: 'roboto300Light';
`
export const Time = styled.Text`
  color: ${(props) => props.theme.top.time};
  font-size: ${height * 0.03};
  font-family: 'roboto400Regular';
`

export const Image = styled.Image`
  margin-bottom: 40px;
`

export const Information = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Temperature = styled.Text`
  color: ${(props) => props.theme.information.temperature};
  font-size: ${height * 0.1};
  font-family: 'roboto400Regular';
`
export const Description = styled.Text`
  color: ${(props) => props.theme.information.description};
  text-align: center;
  width: ${width * 0.5};
  font-size: ${height * 0.025};
  font-family: 'roboto400Regular';
`
export const LineHorizontal = styled.View`
  width: ${width * 0.1};
  background-color: ${(props) => props.theme.lineHorizontal};
  height: ${height * 0.0018};
  margin-top: ${width * 0.08};
`

export const ClimateData = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const Card = styled.View`
  display: flex;
  align-items: center;
  text-align: center;
`
export const CardTitle = styled.Text`
  color: ${(props) => props.theme.climateData.cardTitle};
  font-size: ${height * 0.015};
  margin-top: ${height * 0.005};
  margin-bottom: ${height * 0.005};
  font-family: 'roboto400Regular';
`
export const CardData = styled.Text`
  color: ${(props) => props.theme.climateData.cardData};
  font-size: ${height * 0.02};
  font-family: 'roboto400Regular';
`
export const LineVertical = styled.View`
  width: ${width * 0.003};
  height: ${height * 0.03};
  background-color: ${(props) => props.theme.climateData.lineVertical};
  margin-left: ${width * 0.04};
  margin-right: ${width * 0.04};
`

export const StyledEntyo = styled(Entyo)`
  color: ${(props) => props.theme.climateData.icon};
  font-size: ${height * 0.03};
`
export const StyledFeather = styled(Feather)`
  color: ${(props) => props.theme.climateData.icon};
  font-size: ${height * 0.03};
`
export const StyledMaterialCommunityIcons = styled(MaterialCommunityIcons)`
  color: ${(props) => props.theme.climateData.icon};
  font-size: ${height * 0.03};
`
