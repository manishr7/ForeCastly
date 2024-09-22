import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Spinner from '../components/ui/Spinner/Spinner';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { setIsInitial } from '../store/reducers/appReducer';
import { AppStore } from '../store/store';

const Home = () => {
  console.log(localStorage.getItem('WeatherData'));
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));
  const dispatch = useDispatch();
  const CachedWeatherData= JSON.parse(localStorage.getItem('WeatherData') || 'null');
  useEffect(() => {
    if(CachedWeatherData){
    dispatch(setIsInitial(false));
    }
  }, [dispatch]); 
 useSelector((state: AppStore) => {
    console.log(state.weather.weatherData);
  });
  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <CurrentWeather />
      <Forecast />
      <Footer />
    </>
  );
};

export default Home;
