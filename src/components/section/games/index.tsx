import * as C from './styles';
import { PlusCircle } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { IProducts } from '../../../types/index';
import { items } from '../../../object/object';

export default () => {

  const { addProductCart } = useContext(CartContext);
  const [games, setGames] = useState<IProducts[]>(
    items.filter(item => item.departament === "game")
  );

  return(
    <C.Container>
      <h1>Jogos</h1>

      <C.ListGames>
        {games.map(item => (
            <C.Game key={item.id}>
              <a href={`/${item.id}`}>
                <img src={item.data.image} />
                <span>{item.data.price}</span>
              </a>
              <C.InfoGame>
                <C.Info>
                  <h1>{item.data.name}</h1>
                  <h2>{item.data.category}</h2>
                </C.Info>
                <button onClick={() => addProductCart(item)}>
                  <PlusCircle
                    color="var(--purple-primary)"
                    className="w-7 h-7"
                  />
                </button>
              </C.InfoGame>
            </C.Game>
          ))}
      </C.ListGames>
    </C.Container>
  );
} 