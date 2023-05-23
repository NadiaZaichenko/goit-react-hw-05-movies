import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Main = styled.div`
display: flex;
`;

export const BackLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 40px;
text-decoration: none;
background-color: navy;
color: yellow;
border-radius: 10px;
transition: color 250ms linear, background-color 250ms linear;
&:hover,
&:focus-visible {
  background-color: yellow;
  color: navy;
}
`;
export const Message = styled.h1`
font-size: 34px;
`