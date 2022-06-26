import * as C from './styles';
import { PlusCircle } from 'phosphor-react';
import { useContext } from 'react'; 
import { CartContext } from '../../../context/CartContext';
import { ItemsContext } from '../../../context/FilterItemsContext';

export default () => {
  
  const { products } = useContext(ItemsContext);
  const { addProductCart } = useContext(CartContext);
  
  return(
    <C.Container>
      {products.map((item) => (
        <C.Item key={item.id}>
          <a href={`/${item.id}`}>
            <img src={item.data.image} />
            <C.InfoProduct>
              <h1>{item.data.name}</h1>
              <h2>{item.data.category}</h2>
              <h3>{item.data.price}</h3>
            </C.InfoProduct>
          </a>
          <button onClick={() => addProductCart(item)}>
            <PlusCircle
              color="var(--purple-primary)"
              className="w-6 h-6 mr-1"
            />
            Add a sacola
          </button>
        </C.Item>
      ))}
    </C.Container>
  );
}