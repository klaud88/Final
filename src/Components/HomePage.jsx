import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState, useMemo, useCallback, useContext } from 'react';
import { UserContext } from './UserContext';
const HomePage = () => {
  const { temp, wind, weather, name, icon, uni, setUni } =
    useContext(UserContext);

  const MainSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px 300px;
    grid-template-areas:
      ' .  dropdown dropdown . '
      'list list list .';
  `;
  const Select = styled.select`
    margin-top: 10px;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border-style: none;
    background-color: #04a3ff;
    color: #efefef;
    font-size: 1rem;
    text-align: center;
    outline: none;
  `;

  const Option = styled.option`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    line-height: 20px;
  `;
  const Section2 = styled.div`
    grid-area: dropdown;
    display: flex;
    justify-content: center;
    align-content: center;
  `;
  const Section1 = styled.div`
    grid-area: list;
    margin-top: 50px;
  `;
  const Name = styled.h1`
    display: flex;
    font-size: 1.3rem;
    padding-left: 30px;
    transition: 1s;
  `;
  const WebPage = styled.a`
    display: flex;
    justify-content: center;
    font-size: 1rem;
    border-bottom: 1px solid #82ce0c;
    text-decoration: none;
    padding-right: 0;
    color: transparent;
    transform: translateX(-100px);
    transition: 1s ease;
  `;
  const SectionDiv = styled.div`
    margin-left: 50px;
    padding: 10px;
    width: 100%;
    perspective: 100px;
    color: #04a3ff;
    transition: 1 ease;
    &:hover ${WebPage} {
      transform: translateX(10px);
      color: #fb7401;
    }
    &:hover ${Name} {
      transform: translateX(50px);
      transition: 1s ease;
    }
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

  const dataURL = 'http://universities.hipolabs.com/search';

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${dataURL}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const countries = useMemo(
    () => [...new Set(data?.map((item) => item.country))],
    [data]
  );

  const handle = useCallback((e) => setUni(e.target.value), []);

  const dataFilter = useMemo(
    () => data?.filter((data) => data.country.includes(`${uni}`))?.slice(0, 10),
    [uni]
  );
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

      <MainSection>
        <Section2>
          <Select onChange={handle} value={uni}>
            <Option>აირჩიეთ ქვეყანა</Option>,
            {countries?.map((data, index) => (
              <Option key={index}>{data}</Option>
            ))}
          </Select>
        </Section2>
        <Section1>
          {dataFilter?.map((data, index) => (
            <SectionDiv key={index}>
              <Name>{data.name}</Name>
              <WebPage href={data.web_pages} target='_blank'>
                {data.web_pages}
              </WebPage>
            </SectionDiv>
          ))}
        </Section1>
      </MainSection>
    </>
  );
};
export default HomePage;
