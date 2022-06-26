import styled from "styled-components";

interface ListCategoryProps {
  done: boolean;
}

export const Category = styled.div`
  margin-top: 10px;

  button{
    width: 100%;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    font-size: .70rem;
    color: #fff;

    transition: .2s;
    border-radius: 5px;

    span{
      :last-of-type{
        width: 20px;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 3px;
        background-color: var(--dark-300);
      
        :focus{
          padding: 0 10px;
          outline: 2px solid var(--dark-100);
        }
      }
    }
    @media screen and (max-width: 1020px){
      justify-content: center;

      span{
        :first-of-type{
          display: none;

          :focus{
            padding: 0;
          }
        }
      }
    }
  }
`;

export const ListCategory = styled.div(({ done }: ListCategoryProps) => (
  `
    height: ${ done ? "100%" : "0"};
    
    overflow: ${ done ? "auto" : "hidden" };
    transition: .2s;
  `
));

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