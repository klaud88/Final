import styled from 'styled-components';
import { color } from './homePage.styled';

export const Text = styled.div`
  display: block;
  align-items: center;
  margin-top: 140px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: #04a3ff;
    text-shadow: 0px 10px 15px;
    animation: alternate 2s linear infinite;
    letter-spacing: 10px;
  }
  p {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #04a3ff;
    text-shadow: 0px 10px 10px;
    letter-spacing: 5px;
  }
`;

export const WeatherSection = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 0px;
  padding-right: 20px;

  p {
    position: absolute;
    top: -5px;
    right: 5px;
    color: ${color.orange};
    font-weight: 600;
  }

  h1 {
    position: absolute;
    top: 15px;
    right: 5px;
    font-size: 1.8rem;
    color: ${color.blue};
    justify-content: center;
    margin-bottom: 5px;
  }

  img {
    width: 100px;
    position: absolute;
    right: 30px;
    top: -10px;
  }
`;

export const WSection = styled.div`
  position: absolute;
  top: 80px;
  right: 5px;
  display: flex;

  span {
    display: flex;
    font-size: 1rem;
    color: ${color.orange};
    justify-content: center;
    margin: 0;
    padding-right: 10px;
  }

  i {
    display: flex;
    font-size: 1rem;
    color: ${color.orange};
  }
`;
