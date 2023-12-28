import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState, useMemo, useCallback, useContext } from 'react';
import { UserContext } from './UserContext';
import {
  MainSection,
  Section2,
  Section1,
  WeatherSection,
  WSection,
} from './styles/homePage.styled';

const HomePage = () => {
  const { temp, wind, weather, name, icon, uni, setUni } =
    useContext(UserContext);

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
        <p>{name}</p>
        <img src={icon} />
        <h1>{temp}&#8451;</h1>
        <WSection>
          <span>{weather}</span>
          <i>{wind}&nbsp;km/h</i>
        </WSection>
      </WeatherSection>

      <MainSection>
        <Section2>
          <select onChange={handle} value={uni}>
            <option>აირჩიეთ ქვეყანა</option>,
            {countries?.map((data, index) => (
              <option key={index}>{data}</option>
            ))}
          </select>
        </Section2>
        <Section1>
          {dataFilter?.map((data, index) => (
            <div key={index}>
              <h1>{data.name}</h1>
              <a href={data.web_pages} target='_blank'>
                {data.web_pages}
              </a>
            </div>
          ))}
        </Section1>
      </MainSection>
    </>
  );
};
export default HomePage;
