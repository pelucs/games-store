import styled from "styled-components";

export const MenuHamb = styled.div`
  width: 35px;
  height: 100%;

  display: none;

  ::before,
  ::after{
    content: "";
    display: block;

    height: 3px;
    border-radius: 5px;
    background-color: #fff;
  }
  ::before{
    width: 30px;
  }
  ::after{
    width: 20px;
    margin-top: 6px;
  }

  @media screen and (max-width: 580px){
    display: block;
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

export const MenuBox = styled.div`

`;

export const Links = styled.div`
  a{
    flex: 1;
    height: 45px;
    padding: 0 20px;

    display: flex;
    align-items: center;

    font-size: .90rem;
    font-weight: 500;
    color: var(--dark-100);

    transition: .2s;

    border-top: 1px solid var(--dark-300);

    :last-of-type{
      border-bottom: 1px solid var(--dark-300);
    }
    :hover{
      background-color: var(--dark-300);
    }
  }
`;

export const LogoSociais = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 80px;
    margin-top: 50px;
  }
`;

export const Sociais = styled.div`
  display: flex;
  align-items: center;

  a{
    margin: 0 10px;
  }
`;