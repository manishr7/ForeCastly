export const fetchCities = async (search: string) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY; 
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.map((item: any) => {
    return item.name + ', ' + item.country;
  });
};
