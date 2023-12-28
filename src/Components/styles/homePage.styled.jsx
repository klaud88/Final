import styled from 'styled-components';

export const color = {
  blue: '#04a3ff',
  orange: '#fb7401',
  green: '#82ce0c',
};
export const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 300px;
  grid-template-areas:
    ' .  dropdown dropdown . '
    'list list list .';
`;

export const Section2 = styled.div`
  grid-area: dropdown;
  display: flex;
  justify-content: center;
  align-content: center;

  select {
    margin-top: 10px;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border-style: none;
    background-color: ${color.blue};
    color: #efefef;
    font-size: 1rem;
    text-align: center;
    outline: none;
  }

  option {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    line-height: 20px;
  }
`;
export const Section1 = styled.div`
  grid-area: list;
  margin-top: 50px;

  div {
    margin-left: 50px;
    padding: 10px;
    width: 100%;
    perspective: 100px;
    color: ${color.blue};
    transition: 1 ease;

    h1 {
      display: flex;
      font-size: 1.3rem;
      padding-left: 30px;
      transition: 1s;
    }

    a {
      display: flex;
      justify-content: center;
      font-size: 1rem;
      border-bottom: 1px solid ${color.green};
      text-decoration: none;
      padding-right: 0;
      color: transparent;
      transform: translateX(-100px);
      transition: 1s ease;
    }
    &:hover h1 {
      transform: translateX(50px);
      transition: 1s ease;
    }
    &:hover a {
      transform: translateX(10px);
      color: ${color.orange};
    }
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
