import styled from "styled-components";

export const ListItems = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;

  > button{
    width: 100%;
    height: 40px;
    margin-top: 15px;

    border-radius: 5px;
    background-color: var(--purple-primary);

    color: #fff;
    font-size: .90rem;

    :focus{
      outline: 2px solid var(--purple-primary);
      outline-offset: 2px;
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 85px;
  margin-top: 20px;
  padding: 10px;

  display: flex;
  align-items: center;

  border-radius: 5px;
  background-color: var(--dark-200);

  > a{
    flex: 1;
    height: 100%;

    display: flex;
    align-items: flex-start;

    img{
      height: 100%;
      border-radius: 5px;
    }
  }
  :focus{
    outline: 2px solid var(--purple-primary);
    outline-offset: 2px;
  }
`;

export const InfoItem = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  p{
    font-size: .70rem;
    color: #fff;
  }
`;

export const ButtonsItem = styled.div`
  flex: 1;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  button{
    margin: 0;
  }
  a{
    text-decoration: underline;
    font-size: .70rem;
    color: #fff;
  }
`;

export const NameItem = styled.div`
  h1, h2, h3{
    width: 100%;
    max-width: 200px;
  }
  h1{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: .80rem;
    color: #fff;
  }
  h2{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: .70rem;
    color: var(--dark-100);
  }
  h3{
    margin-top: 5px;

    font-size: .80rem;
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