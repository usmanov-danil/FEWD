import styled from 'styled-components';
export const Box = styled.div`
  background: black;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
`


export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,
  minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
    minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
`;


export const Logo = styled.img`
  background-size: auto;
  width: 30%;
  margin-bottom: 20px;
`;


export const HeaderLink = styled.a`
  color: #fff;
  align-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.a`
  font-size: 24px;
  color: #fff04f;
  align-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;