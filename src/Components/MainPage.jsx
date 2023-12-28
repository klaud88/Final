import { Route, Routes, Link } from 'react-router-dom';
import Page404 from './Page404';
import HomePage from './HomePage';
import { UserContext } from './UserContext';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { HeaderDiv, LinkDiv } from './styles/mainPage.styled';

const MainPage = () => {
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [weather, setWeather] = useState('');
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [uni, setUni] = useState('ამოირჩიეთ ქვეყანა');

  const url =
    'http://api.weatherapi.com/v1/current.json?key=841f7d6aea8c4389a91174448231812&q=Tbilisi&aqi=no';

  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      setTemp(response.data.current.temp_c);
      setWind(response.data.current.wind_kph);
      setWeather(response.data.current.condition.text);
      setName(response.data.location.name);
      setIcon(response.data.current.condition.icon);
    });
  }, []);

  const handleClear = useCallback(() => setUni('ამოირჩიეთ ქვეყანა'), []);

  return (
    <>
      <HeaderDiv>
        <Link to='/'>
          <div onClick={handleClear}></div>
        </Link>
        <LinkDiv>
          <Link to='/home'>Home</Link>
          <Link to='/contact'>Contact</Link>
        </LinkDiv>
      </HeaderDiv>

      <UserContext.Provider
        value={{
          temp,
          wind,
          weather,
          name,
          icon,
          uni,
          setUni,
        }}
      >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};
export default MainPage;
