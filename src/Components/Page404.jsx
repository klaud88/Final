import { useContext } from 'react';
import { UserContext } from './UserContext';
import { Text, WeatherSection, WSection } from './styles/page404.styled';
const Page404 = () => {
  const { temp, wind, weather, name, icon } = useContext(UserContext);

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

      <Text>
        <h1>Page 404</h1>
        <p>Page Not Found</p>
      </Text>
    </>
  );
};
export default Page404;
