import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const GalleryItem = styled.li`
display: flex;
flex-direction: column;
gap: 10px;
text-align: center;
height: auto;
width: 240px;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
border-radius: 10px;
background-color: #063250;
list-style: none;
transform: scale(1);
transition: transform 250ms linear;

&:hover {
    transform: scale(1.04);
  }
`

export const Img = styled.img `
display: block;
height: 360px;
width: 100%;
border-radius: 10px;
`

export const Title = styled.h3`
margin: 0;
padding: 14px;
font-size: 18px;
color: #a3d1da;

`;
export const LinkItem = styled(Link)`
list-style: none;
`