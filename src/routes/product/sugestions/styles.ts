import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;

  h1{
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ListSugestions = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;

`;

export const Item = styled.div`
  width: 100%;
  max-width: 150px;
  height: 220px;
  margin-top: 15px;
  margin-right: 20px;
  padding: 15px;

  transition: .2s;

  border-radius: 5px;
  background-color: var(--dark-300);
  
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 100%;
    max-width: 130px;

    border-radius: 5px;
  }
  h1{    
    text-align: center;
    font-size: .80rem;
    margin-top: 10px;
  }
  :hover{
    transform: scale(1.05);
  }
`;