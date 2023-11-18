import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  useFonts,
  Roboto_300Light as roboto300Light,
  Roboto_400Regular as roboto400Regular,
} from '@expo-google-fonts/roboto'
import * as Location from 'expo-location'

import getCurrentWeather from '../../api/consultAPI'
import * as C from './styled'

const height = Dimensions.get('window').height

const Home: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [temp, setTemp] = useState<number>(0)
  const [tempMax, setTempMax] = useState<number>(0)
  const [windSpeed, setWindSpeed] = useState<number>(0)

  const [currentTime, setCurrentTime] = useState<string>('')
  const [dayNames, setDayNames] = useState<string>('')
  const [periods, setPeriods] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const [fontsLoaded] = useFonts({
    roboto300Light,
    roboto400Regular,
  })

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        console.log('Sem permissão')
      } else {
        const location: Location.LocationObject =
          await Location.getCurrentPositionAsync({})
        const response = await getCurrentWeather(location)
        setName(response.name)
        setTemp(response.main.temp)
        setTempMax(response.main.temp_max)
        setWindSpeed(response.wind.speed)

        const newCurrentDateTime = new Date()

        switch (newCurrentDateTime.getDay()) {
          case 0:
            setDayNames('SUNDAY')
            break
          case 1:
            setDayNames('MONDAY')
            break
          case 2:
            setDayNames('TUESDAY')
            break
          case 3:
            setDayNames('WEDNESDAY')
            break
          case 4:
            setDayNames('THURSDAY')
            break
          case 5:
            setDayNames('FRIDAY')
            break
          case 6:
            setDayNames('SATURDAY')
            break
          default:
            setDayNames('')
            break
        }

        const hours = newCurrentDateTime.getHours()
        const minutes = newCurrentDateTime.getMinutes()

        setCurrentTime(`${hours}:${minutes}`)

        if (hours >= 0 && hours < 12) {
          setPeriods('AM')
        } else {
          setPeriods('PM')
        }

        if (hours >= 18 || hours <= 5) {
          setMessage('GOOD NIGHT')
        } else if (hours > 5 && hours <= 12) {
          setMessage('GOOD MORNING')
        } else if (hours > 12 && hours < 18) {
          setMessage('GOOD AFTERNOON')
        }
      }
    } catch (error) {
      console.error('Erro ao solicitar permissões de localização:', error)
    }
  }

  useEffect(() => {
    if (!fontsLoaded) {
      return
    }

    getLocation()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <C.Screen>
      <C.Center>
        <C.Top>
          <C.CityName>{name}</C.CityName>
          <C.Time>
            {dayNames} {currentTime} {periods}
          </C.Time>
        </C.Top>
        <C.Content>
          <C.Image source={require('@assets/image.png')} />
          <C.Information>
            <C.Temperature>{Math.floor(temp - 273.15)}°C</C.Temperature>
            <C.Description>{message}</C.Description>
          </C.Information>
          <C.LineHorizontal />
        </C.Content>
        <C.ClimateData>
          <C.Card>
            <Feather name="sun" size={height * 0.03} color="#525864" />
            <C.CardTitle>SUNRISE</C.CardTitle>
            <C.CardData>7:00</C.CardData>
          </C.Card>
          <C.LineVertical />
          <C.Card>
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={height * 0.03}
              color="#525864"
            />
            <C.CardTitle>MAX TEMPERATURE</C.CardTitle>
            <C.CardData>{Math.floor(tempMax - 273.15)}°C</C.CardData>
          </C.Card>
          <C.LineVertical />
          <C.Card>
            <Feather name="wind" size={height * 0.03} color="#525864" />
            <C.CardTitle>WIND</C.CardTitle>
            <C.CardData>{windSpeed}km/h</C.CardData>
          </C.Card>
        </C.ClimateData>
      </C.Center>
    </C.Screen>
  )
}

export default Home
