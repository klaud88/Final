import { Route, Routes, Link } from 'react-router-dom';
import Page404 from './Page404';
import styled from 'styled-components';
import HomePage from './HomePage';
import { UserContext } from './UserContext';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import mainIcon from '../assets/logo.png';

const MainPage = () => {
  const HeaderDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px;
    grid-template-areas: 'logo nav nav weather';
    border-bottom: 1px solid #82ce0c;
  `;
  const Logo = styled.div`
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
    content: url(${mainIcon});
    height: 80px;
    cursor: pointer;
  `;
  const LinkDiv = styled.div`
    grid-area: nav;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;
  const StyledLink = styled(Link)`
    color: #46c2f8;
    transition: 0.5s;
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
      text-decoration: underline;
      text-decoration-color: #82ce0c;
    }
  `;
  const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const WeatherSection = styled.div`
    grid-area: weather;
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 20px;
    padding-right: 20px;
  `;
  const Temp = styled.h1`
    display: flex;
    font-size: 1rem;
    color: #fb7401;
    justify-content: center;
    margin-bottom: 5px;
  `;
  const Wind = styled.p`
    display: flex;
    font-size: 1rem;
    color: #fb7401;
    justify-content: center;
    margin: 0;
  `;
  const WeatherIcon = styled.img`
    content: url();
    width: 100px;
  `;
  const WeatherMood = styled.p`
    display: flex;
    font-size: 1rem;
    color: #fb7401;
    justify-content: center;
    margin: 0;
  `;

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
      console.log(response.data.current.condition.icon);
    });
  }, []);

  const handleClear = useCallback(() => setUni('ამოირჩიეთ ქვეყანა'), []);

  return (
    <>
      <HeaderDiv>
        <LogoLink to='/'>
          <Logo onClick={handleClear} />
        </LogoLink>
        <LinkDiv>
          <StyledLink to='/home'>Home</StyledLink>
          <StyledLink to='/contact'>Contact</StyledLink>
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
