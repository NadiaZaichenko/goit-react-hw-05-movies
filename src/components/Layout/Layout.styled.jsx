import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header= styled.header`
padding: 10px;
background-color: #032644;
position: sticky;
z-index: 100;
top: 0;
`;
export const Container = styled.div`
display: flex;
background-color: #032644;

`;

export const Navigation = styled.nav`
display: flex;
align-item: center;
gap: 20px;
`;
export const NavigateLink = styled(NavLink)`
padding: 12px;
height: 30px;
width: 90px;
text-decoration: none;
font-size: 20px;
font-weight: 700;
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
`;
