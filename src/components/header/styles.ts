import styled from "styled-components";

export const Header = styled.div`
  width: calc(100% - 250px);
  height: 70px;
  padding: 0 20px 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  transition: .2s;

  background-color: var(--dark-400);

  @media screen and (max-width: 1020px){
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 580px){
    width: 100%;
    height: 60px;
    padding: 0 20px 0 20px;
  }
`;

export const Logo = styled.div`
  display: none;

  img{
    width: 25px;
  }
  @media screen and (max-width: 580px){
    display: block;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  max-width: 300px;
  height: 30px;

  position: relative;

  display: flex;
  align-items: center;

  border-radius: 5px;
  background-color: var(--dark-200);

  input{
    width: 100%; 
    height: 100%;
    padding: 0 10px 0 30px;

    outline: none;

    background-color: transparent;

    color: #fff;
    font-size: .80rem;
  }
  @media screen and (max-width: 580px){
    display: none;
  }
`;

export const NotifyCart = styled.div`
  margin-left: 15px;

  display: flex;
  align-items: center;

  button{
    span{
      min-width: 15px;
      height: 15px;
      padding: 0 2px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -8px;
      right: -8px;

      border-radius: 50%;
      background-color: var(--purple-primary);

      font-size: .70rem;
      color: #fff;
    }
  }
`;

export const LinksPanel = styled.div`
  a{
    width: 100%;
    height: 35px;
    padding: 0 10px;

    display: flex;
    align-items: center;

    transition: .2s;

    color: #fff;
    font-weight: 500;
    font-size: .80rem;

    :hover{
      background-color: var(--dark-200);
    }
  }
`;

export const HeaderPanel = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
  }
`;

export const BoxNotification = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    text-align: center;

    font-weight: 500;
    font-size: .90rem;
    color: var(--dark-100);
  }
`;