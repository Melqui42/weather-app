import { ImageSourcePropType } from 'react-native'

import clearSkyDay from '@assets/images/day/clearSky.png'
import fewCloudsDay from '@assets/images/day/fewClouds.png'
import clearSkyNight from '@assets/images/night/clearSky.png'
import fewCloudsNight from '@assets/images/night/fewClouds.png'
import * as Location from 'expo-location'

import getCurrentWeather from './consultAPI'

interface LocationData {
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

const getLocation = async (): Promise<LocationData | undefined> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      console.log('Sem permissão')
    } else {
      const location: Location.LocationObject =
        await Location.getCurrentPositionAsync({})
      const response = await getCurrentWeather(location)

      const newCurrentDateTime = new Date()

      let dayNames = ''
      switch (newCurrentDateTime.getDay()) {
        case 0:
          dayNames = 'SUNDAY'
          break
        case 1:
          dayNames = 'MONDAY'
          break
        case 2:
          dayNames = 'TUESDAY'
          break
        case 3:
          dayNames = 'WEDNESDAY'
          break
        case 4:
          dayNames = 'THURSDAY'
          break
        case 5:
          dayNames = 'FRIDAY'
          break
        case 6:
          dayNames = 'SATURDAY'
          break
        default:
          break
      }

      const hours = newCurrentDateTime.getHours()
      const minutes = newCurrentDateTime.getMinutes()

      const fullHours = `${hours}:${minutes}`

      let timeSystem = ''
      if (hours >= 0 && hours < 12) {
        timeSystem = 'AM'
      } else {
        timeSystem = 'PM'
      }

      let message = ''
      if (hours >= 18 || hours <= 5) {
        message = 'GOOD NIGHT'
      } else if (hours > 5 && hours <= 12) {
        message = 'GOOD MORNING'
      } else if (hours > 12 && hours < 18) {
        message = 'GOOD AFTERNOON'
      }

      let image

      const getWeatherIcon = (
        night: ImageSourcePropType,
        day: ImageSourcePropType,
      ) => {
        if (hours >= 18 || hours <= 5) {
          image = night
        } else {
          image = day
        }
      }

      switch (response.weather[0].description) {
        case 'few cloud':
          getWeatherIcon(fewCloudsNight, fewCloudsDay)
          break
        case 'clear sky':
          getWeatherIcon(clearSkyNight, clearSkyDay)
      }

      return {
        image,
        cityName: response.name,
        dayName: dayNames,
        hours: { hours, minutes, fullHours },
        timeSystem,
        message,
        temp: Math.floor(response.main.temp - 273.15),
        tempMax: Math.floor(response.main.temp_max - 273.15),
        windSpeed: response.wind.speed,
        humidity: response.main.humidity,
      }
    }
  } catch (error) {
    console.error('Erro ao solicitar permissões de localização:', error)
  }
}

export default getLocation
