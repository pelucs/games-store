import styled from "styled-components";

import banner from '../../../assets/banner-razer.png';

export const BannerContainer = styled.div`
  width: 100%;
  height: 350px;

  border-radius: 5px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;

  button{
    position: relative;
    top: 70%;
    left: 35%;
  }
  @media screen and (max-width: 580px){
    max-height: 180px;
  }
`;