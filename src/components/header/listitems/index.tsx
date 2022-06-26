import * as C from './styles';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Trash } from 'phosphor-react';

export default () => {

  const { cart, removeProductCart } = useContext(CartContext);

  return(
    <C.ListItems>
      {cart.length !== 0 ?
        <>
          {cart.map((product) => (
            <C.Item key={product.id}>
              <a href={`/${product.id}`}>
                <img src={product.data.image} alt={product.data.name}/>
                <C.InfoItem>
                  <C.NameItem>
                    <h1>{product.data.name}</h1>
                    <h2>{product.data.category}</h2>
                    <h3>{product.data.price}</h3>
                  </C.NameItem>
                </C.InfoItem>
              </a>
              <C.ButtonsItem>
                <button title="Remover item" onClick={() => removeProductCart(product.id)}>
                  <Trash
                    weight="bold"
                    className="w-4 h-4 text-white" 
                  />
                </button>
                <a href="#">Ver item</a>
              </C.ButtonsItem>
            </C.Item>
            ))}
            <button>Finalizar compra</button> 
        </>
      :
        <C.BoxNotification>
          <h1>Você não possui <br></br> nenhum item na sacola</h1>
        </C.BoxNotification>
      }
    </C.ListItems>
  );
}