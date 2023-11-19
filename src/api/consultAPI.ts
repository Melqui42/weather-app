import Axios from 'axios'
import * as Location from 'expo-location'

const key = 'bd16c61e5d02fae394723e49ab73f4d0'

const getCurrentWeather = async (location: Location.LocationObject) => {
  try {
    const coords = location.coords
    const lat: number = coords.latitude
    const lon: number = coords.longitude

    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,
    )

    return response.data
  } catch (error) {
    console.error('Erro ao obter dados climáticos:', error)
    throw error
  }
}

export default getCurrentWeather
