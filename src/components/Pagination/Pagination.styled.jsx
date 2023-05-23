import ReactPaginate from 'react-paginate';
import styled from "@emotion/styled";


export const Paginate = styled(ReactPaginate)`
margin-top: 50px;
margin-bottom: 50px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 10px;
list-style-type: none;
padding: 0;

li a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: #a3d1da 2px solid;
  text-decoration: none;
  font-size: 14px;
  color: #a3d1da;
  cursor: pointer;
}
 li.active a {
  background-color: #2daac2;
  border-color: transparent;
  color: #FFFFFF;
  font-size: 20px;
}
li.disabled a {
  color: grey;
}
li.disable,
li.disabled a {
  cursor: default;
}
`