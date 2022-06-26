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
    padding: 0 20px 50px 40px;
  }
  @media screen and (max-width: 580px){
    width: 100%;
    padding: 0 20px 50px 20px;
  }
`;

export const SectionProduct = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1020px){
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const InfoProductContainer = styled.div`
  h1{
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--purple-primary);    
  }
  h2{
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }
  p{
    width: 100%;
    max-width: 400px;

    text-align: justify;
    font-size: .90rem;
    color: var(--dark-100);
  }
  @media screen and (max-width: 1020px){
    margin-top: 40px;
  }
`;

export const Assessments = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  h3{
    margin-right: 7px;

    font-size: .90rem;
    font-weight: 700;
    color: var(--dark-100);
  }
  img{
    width: 100%;
    max-width: 80px;
  }
`;

export const PriceProduct = styled.div`
  margin-top: 20px;
`;

export const Buttons = styled.div`
  margin-top: 30px;

  display: flex;
  align-items: center;

  button{
    width: 200px;
    height: 40px;

    border-radius: 5px;

    font-size: .90rem;
    font-weight: 500;

    :first-of-type{
      background-color: var(--purple-primary);
      color: #fff;

      :focus{
        outline: 2px solid var(--purple-primary);
        outline-offset: 2px;
      }
    }
    :last-of-type{
      margin-left: 15px;

      background-color: #fff;
      color: #000;

      :focus{
        outline: 2px solid #fff;
        outline-offset: 2px;
      }
    }
  }
`;

export const ImageProduct = styled.div`
  @media screen and (max-width: 1020px){
    width: 90%;
    margin: 0 auto;
  }
`;