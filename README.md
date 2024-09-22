# ForeCastly

<img src="./public/Screenshot 2024-09-22 224219.png" width="400"> <img src="./public/Screenshot 2024-09-22 224245.png" width="400">

Weather App built with React.
[Live Demo]()

## Tech Stack

**React, Typescript, Redux, StyledComponents**

## Features

- **Weather forecast for any city or place**
- **Extended 7 days forecast**
- **Find user location weather by utilizing Window GeolocationAPI**
- **One-click Celcius to Fahrenheit conversion and vice versa**
- **Dark Mode**
- **Implement caching to store the last searched city and its weather data for offline viewing**
## Getting Started

First you need an API key from OpenWeatherMap, you can get one by creating an account on their website.
After you got your API key, create a **.env** file at root directory of project, copy the line below to the file and replace YOUR_KEY with your OpenWeatherMap API Key.

```
REACT_APP_WEATHER_API_KEY=YOUR_KEY
```

Finally clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/manishr7/ForeCastly.git
```

```bash
cd reactweather
npm install
npm start
```

## Credits

[OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap') (Weather data API)

[Icons8.com](https://www.icons8.com 'Icons8.com') (Weather icons)
