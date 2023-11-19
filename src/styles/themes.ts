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

export const lightDefaultTheme: ThemeState = {
  StyledStatusBar: 'dark-content',
  backgroundColor: '#e5ecf4',
  top: {
    cityName: '#181e2a',
    time: '#181e2a',
  },
  information: {
    temperature: '#181e2a',
    description: '#86898e',
  },
  lineHorizontal: '#86898e',
  climateData: {
    icon: '#525864',
    cardTitle: '#525864',
    cardData: '#525864',
    lineVertical: '#525864',
  },
}

export const darkDefaultTheme: ThemeState = {
  StyledStatusBar: 'light-content',
  backgroundColor: '#313745',
  top: {
    cityName: '#ffffff',
    time: '#ffffff',
  },
  information: {
    temperature: '#ffffff',
    description: '#ffffff',
  },
  lineHorizontal: '#ffffff',
  climateData: {
    icon: '#ffffff',
    cardTitle: '#ffffff',
    cardData: '#ffffff',
    lineVertical: '#ffffff',
  },
}
