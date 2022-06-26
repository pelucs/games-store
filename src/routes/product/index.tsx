import * as C from './styles';
import { IProducts } from '../../types';

import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import estrelas from '../../assets/4_estrelas.png';
import Sugestions from './sugestions';

interface ProductProps {
  product: IProducts;
}

export default ({ product }: ProductProps) => {
  return(
    <>
      <Sidebar/>
      {/* <Header/> */}
      <C.Container>
        <C.SectionProduct>
          <C.InfoProductContainer>
            <h2>{product.data.category}</h2>
            <h1>{product.data.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Minima adipisci quam modi enim autem doloribus placeat, quibusdam quasi? 
            Culpa aliquam necessitatibus odit, vero soluta quos sequi odio iste impedit perspiciatis!</p>

            <C.Assessments>
              <h3>Avaliações</h3>
              <img src={estrelas} alt="Estrelas"/>
            </C.Assessments>

            <C.PriceProduct>
              <h2>por apenas</h2>
              <h1>{product.data.price}</h1>
              <h2>em até 12x</h2>
            </C.PriceProduct>

            <C.Buttons>
              <button>Comprar</button>
              <button>Adicionar a sacola</button>
            </C.Buttons>
          </C.InfoProductContainer>

          <C.ImageProduct>
            <img src={product.data.image} alt={product.data.name}/>
          </C.ImageProduct>
        </C.SectionProduct>

        <Sugestions product={product}/>

      </C.Container>
    </>
  );
}