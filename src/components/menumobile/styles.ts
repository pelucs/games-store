import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 25px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;

  display: none;
  
  background-color: var(--dark-500);

  @media screen and (max-width: 580px){
    display: block;
  }
`;
  
export const Links = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;