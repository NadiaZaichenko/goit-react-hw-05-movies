import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Main = styled.div`
display: flex;
padding: 15px 15px;
`;

export const BackLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 40px;
text-decoration: none;
background-color: blue;
color: #FFFFFF;
border-radius: 10px;
transition: color 250ms linear, background-color 250ms linear;
&:hover,
&:focus-visible {
  background-color: #FFFFFF;
  color: blue;
}
`;
export const Message = styled.h1`
padding-top: 60px;
margin-left: auto;
margin-right: auto;
font-size: 34px;
`