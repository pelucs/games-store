import styled from "styled-components";

import mouse from '../../../assets/mouse-logitech.png';
import headset from '../../../assets/headset-corsair.png';

export const Container = styled.div`
  margin-top: 40px;

  > h1{
    font-weight: 500;
    font-size: 1.2rem;
    color: #fff;
  }
`;

export const Promotions = styled.div`
  width: 100%;

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 580px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PromotionBox = styled.div`
  flex: 1;
  height: 100%;
  margin-top: 20px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between; 

  border-radius: 5px;

  :first-of-type{
    border: 3px solid var(--dark-200);
    background-image: url(${mouse});
    background-size: 60%;
    background-position: 120% 10%;
    background-repeat: no-repeat;
  }
  :last-of-type{
    border: 3px solid var(--dark-200);
    background-image: url(${headset});
    background-size: 70%;
    background-position: 120% 20%;
    background-repeat: no-repeat;
  }
`;

export const InfoPromotion = styled.div`
  > h1{
    font-size: 2rem;
    font-weight: 700;
    
    color: var(--purple-primary); 

    span{
      font-size: 1.1rem;
      font-weight: 400;
      color: #fff;
    }
  }
  h2{
    font-weight: 500;
    font-size: .90rem;
    color: var(--dark-100);
  }
`;

export const Info = styled.div`
  margin-top: 10px;

  h1{
    font-size: 1rem;
    color: #fff;
  }
  p{
    width: 100%;
    max-width: 50%;

    font-size: 500;
    font-size: .80rem;
    color: var(--dark-100);
  }
`;

export const ButtonPromotion = styled.div`
  button{
    padding: 0 10px;
    height: 35px;

    border-radius: 5px;
    background-color: var(--purple-primary);

    font-weight: 500;
    font-size: .80rem;
    color: #fff;

    :focus{
      outline: 2px solid var(--purple-primary);
      outline-offset: 2px;
    }
  }
`;