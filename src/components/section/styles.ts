import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 250px);
  min-height: 100vh;
  padding: 0 20px 50px 40px;

  position: absolute;
  top: 70px;
  right: 0;

  transition: .2s;

  @media screen and (max-width: 1020px){
    width: calc(100% - 60px);
    padding: 0 10px 30px 30px;
  }
  @media screen and (max-width: 580px){
    width: 100%;
    padding: 0 20px 10px 20px;
  }
`;