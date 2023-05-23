import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Main = styled.main`
padding-top: 40px;
padding-bottom: 40px;
flex-grow: 1;
background-color: #032644;
`
export const Container = styled.div`
margin: 0 auto;
padding: 0 20px;
`;
export const ButtonLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
padding: 12px;
height: 30px;
width: 130px;
text-decoration: none;
font-size: 20px;
font-weight: 600;
text-align: center;
background-color: #2daac2;
color: #070316;
border-radius: 10px;
transition: color 250ms linear, background-color 250ms linear;
&:hover,
&:focus-visible {
  background-color: #070316;
  color: #2daac2;
}
`
export const Image = styled.img`
width: 300px;
height: 100%;
border-radius: 10px;
`
export const InfoMovie = styled.div`
display: flex;
margin-top: 30px;
gap: 40px;
margin-bottom: 30px;
`;
export const Navigate = styled.nav`
display: flex;
justify-content: center;
gap: 30px;
`;
export const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1`
font-size: 24px;
color: #FFFFFF;
`;
export const Rate = styled.p`
  display: flex;
  color: #032644;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  background-color: #2daac2;
  font-size: 18px;
  border-radius: 5px;
`;

export const H2 = styled.h2`
color: #FFFFFF;
`
export const P = styled.p`
color: #FFFFFF;
`