import { useEffect, useState } from 'react'
import { ImageSourcePropType } from 'react-native'

import getLocation from '@api/getLocation'
import {
  useFonts,
  Roboto_300Light as roboto300Light,
  Roboto_400Regular as roboto400Regular,
} from '@expo-google-fonts/roboto'
import { lightDefaultTheme, darkDefaultTheme } from '@styles/themes'
import { ThemeProvider } from 'styled-components'

import * as C from './styled'

interface WeatherData {
  image: ImageSourcePropType
  cityName: string
  dayName: string
  hours: {
    hours: number
    minutes: number
    fullHours: string
  }
  timeSystem: string
  message: string
  temp: number
  tempMax: number
  windSpeed: number
  humidity: number
}

interface ThemeState {
  StyledStatusBar: string
  backgroundColor: string
  top: {
    cityName: string
    time: string
  }
  information: {
    temperature: string
    description: string
  }
  lineHorizontal: string
  climateData: {
    icon: string
    cardTitle: string
    cardData: string
    lineVertical: string
  }
}

const Home: React.FC = () => {
  const [theme, setTheme] = useState<ThemeState | undefined>(undefined)
  const [data, setData] = useState<WeatherData | undefined>(undefined)
  const [fontsLoaded] = useFonts({
    roboto300Light,
    roboto400Regular,
  })

  useEffect(() => {
    if (!fontsLoaded) {
      return
    }

    const fetchData = async () => {
      try {
        const result = await getLocation()
        setData(result)
      } catch (error) {
        console.error('Erro ao obter dados de localização:', error)
      }
    }

    if (data?.hours?.hours != null) {
      const isMorning = data.hours.hours >= 0 && data.hours.hours < 12
      setTheme(isMorning ? lightDefaultTheme : darkDefaultTheme)
    }

    fetchData()
  }, [fontsLoaded, data, theme])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme || lightDefaultTheme}>
      <C.StyledStatusBar />
      <C.Screen>
        <C.Center>
          <C.Top>
            <C.CityName>{data?.cityName}</C.CityName>
            <C.Time>
              {data?.dayName} {data?.hours.fullHours} {data?.timeSystem}
            </C.Time>
          </C.Top>
          <C.Content>
            <C.Image source={data?.image} />
            <C.Information>
              <C.Temperature>{data?.temp}°C</C.Temperature>
              <C.Description>{data?.message}</C.Description>
            </C.Information>
            <C.LineHorizontal />
          </C.Content>
          <C.ClimateData>
            <C.Card>
              <C.StyledEntyo name="water" />
              <C.CardTitle>HUMIDITY</C.CardTitle>
              <C.CardData>{data?.humidity}%</C.CardData>
            </C.Card>
            <C.LineVertical />
            <C.Card>
              <C.StyledMaterialCommunityIcons name="temperature-celsius" />
              <C.CardTitle>MAX TEMPERATURE</C.CardTitle>
              <C.CardData>{data?.tempMax}°C</C.CardData>
            </C.Card>
            <C.LineVertical />
            <C.Card>
              <C.StyledFeather name="wind" />
              <C.CardTitle>WIND</C.CardTitle>
              <C.CardData>{data?.windSpeed}km/h</C.CardData>
            </C.Card>
          </C.ClimateData>
        </C.Center>
      </C.Screen>
    </ThemeProvider>
  )
}

export default Home
