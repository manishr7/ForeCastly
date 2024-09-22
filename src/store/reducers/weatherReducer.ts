import { createSlice ,PayloadAction} from '@reduxjs/toolkit';
import { ExtendedForecastData, WeatherData } from '../../api/types';
import { fetchWeather, transformWeatherData } from '../fetchWeather';

export type WeatherState = {
  weatherData: WeatherData;
  extendedWeatherData: ExtendedForecastData[];
  isError: boolean;
}
const CachedWeatherData= JSON.parse(localStorage.getItem('WeatherData') || 'null');
const CachedForecastData= JSON.parse(localStorage.getItem('ExtendedWeatherData') || 'null');
const initialState: WeatherState = {
  weatherData:( CachedWeatherData|| {
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    weather: {
      id: 200,
      main: '',
      description: '',
      icon: '',
    },
    wind: {
      deg: 0,
      speed: 0,
    },
  }),
  extendedWeatherData:( CachedForecastData|| []),
  isError: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setweatherData: (state: WeatherState, action: PayloadAction<WeatherData>) => {
      state.weatherData= action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const res = transformWeatherData(action.payload);
        localStorage.setItem('WeatherData', JSON.stringify(res.weather));
        localStorage.setItem('ExtendedWeatherData', JSON.stringify(res.forecast));
        state.weatherData = res.weather;
        state.extendedWeatherData = res.forecast;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isError = true;
      });
  },
});
export const { setweatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
