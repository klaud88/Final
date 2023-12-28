import styled from 'styled-components';
import mainIcon from '../../assets/logo.png';
import { color } from './homePage.styled';

export const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px;
  grid-template-areas: 'logo nav nav weather';
  border-bottom: 1px solid ${color.green};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
    content: url(${mainIcon});
    height: 80px;
    cursor: pointer;
  }
`;

export const LinkDiv = styled.span`
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  a {
    color: ${color.blue};
    transition: 0.5s;
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
      text-decoration: underline;
      text-decoration-color: ${color.green};
    }
  }
`;
