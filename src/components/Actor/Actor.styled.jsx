import styled from '@emotion/styled';

export const ActorCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  height: auto;
  width: calc((100% - 100px) / 6);
  border-radius: 10px;
  background-color: #125790;
 
`;
export const ActorPhoto = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ActorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
`;

export const ActorInfoText = styled.p`
  margin: 0;
  color: #76d9ec;
  font-size: 18px;
`;

export const ActorSpanText = styled.span`
    font-weight: 700;
`