import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';

const Page404 = () => {
  const { temp, wind, weather, name, icon } = useContext(UserContext);

  const Text = styled.div`
    display: block;
    align-items: center;
    margin-top: 140px;
  `;
  const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: #04a3ff;
    text-shadow: 0px 10px 15px;
    animation: alternate 2s linear infinite;
    letter-spacing: 10px;
  `;
  const P = styled.p`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #04a3ff;
    text-shadow: 0px 10px 10px;
    letter-spacing: 5px;
  `;
  const Location = styled.p`
    position: absolute;
    top: -5px;
    right: 5px;
    color: #fb7401;
    font-weight: 600;
  `;
  const WeatherSection = styled.div`
    display: flex;
    position: absolute;
    right: 20px;
    top: 0px;
    padding-right: 20px;
  `;
  const Temp = styled.h1`
    position: absolute;
    top: 15px;
    right: 5px;
    font-size: 1.8rem;
    color: #fb7401;
    justify-content: center;
    margin-bottom: 5px;
  `;
  const Wind = styled.p`
    display: flex;
    font-size: 1rem;
    color: #fb7401;
    justify-content: center;
    padding-left: 10px;
    margin: 0;
  `;
  const WeatherIcon = styled.img`
    content: url(${icon});
    width: 100px;
    position: absolute;
    right: 30px;
    top: -10px;
  `;
  const WeatherMood = styled.p`
    display: flex;
    font-size: 1rem;
    color: #fb7401;
    justify-content: center;
    margin: 0;
  `;
  const WSection = styled.div`
    display: flex;
    align-content: end;
    position: absolute;
    top: 80px;
    right: 5px;
  `;
  return (
    <>
      <WeatherSection>
        <Location>{name}</Location>
        <WeatherIcon></WeatherIcon>
        <Temp>{temp}&#8451;</Temp>
        <WSection>
          <WeatherMood>{weather}</WeatherMood>
          <Wind>{wind}&nbsp;km/h</Wind>
        </WSection>
      </WeatherSection>
      <Text>
        <H1>Page 404</H1>
        <P>Page Not Found</P>
      </Text>
    </>
  );
};
export default Page404;
