import styled from "styled-components";

export const Sidebar = styled.div`
  width: 250px;
  height: 100%;
  padding: 20px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  overflow-y: auto;
  transition: .2s; 

  background-color: var(--dark-500);

  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
    width: 5px;
    background-color: var(--dark-300);
  }

  @media screen and (max-width: 1020px){
    width: 70px;
    padding: 20px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 580px){
    display: none;
  }
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 85px;
  margin: 0 auto;

  img{
    width: 100%;
  }
  @media screen and (max-width: 1020px){
    padding: 10px;
  }
`;

export const LinksBox = styled.div`
  width: 100%;

  h1{
    text-transform: uppercase;
    font-size: .70rem;
    color: #fff;
  }
  a{
    flex: 1;
    height: 40px;
  
    display: flex;
    align-items: center;
  
    outline: none;

    border: 2px solid transparent;
    border-radius: 5px;
    color: var(--dark-100);

    transition: .2s;
  
    :first-of-type{
      margin-top: 5px;
    }
    :hover{
      padding: 0 10px;
      background-color: var(--dark-400);
    }
    :focus{
      padding: 0 10px;
      border-color: var(--dark-100);
    }
  }
  @media screen and (max-width: 1020px){
    display: flex;
    align-items: center;
    flex-direction: column;

    a{
      width: 40px;
      justify-content: center;

      :hover{
        padding: 0;
      }
    }
    h1{
      text-align: center;
    }
  }
`;

export const Title = styled.div`
  margin-left: 10px;

  font-weight: 500;
  font-size: .90rem;

  @media screen and (max-width: 1020px){
    width: 0;
    margin: 0;
    overflow: hidden;
  }
`;

export const Menu = styled.div`
  margin-top: 30px;
  
  @media screen and (max-width: 1020px){
    margin-top: 10px;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    justify-content: center; 

    :hover{
      padding: 0;
    }
  }
  @media screen and (max-width: 1020px){
    display: none;
  }
`;