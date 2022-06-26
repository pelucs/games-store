import * as C from './styles';
import { items } from '../../../object/object';
import { useEffect, useState } from 'react';
import { IProducts } from '../../../types';

interface SugestionProps {
  product: IProducts;
}

export default ({ product }: SugestionProps) => {

  const [games, setGames] = useState<IProducts[]>([]);

  useEffect(() => {
    let newItems = items.filter(filter => filter.departament === product.departament
      && filter.id !== product.id);
    setGames(newItems);
  }, []);

  return(
    <C.Container>
      <h1>Mais sugestões</h1>
      <C.ListSugestions>
        {games.map(items => (
          <C.Item key={items.id}>
            <a href={`/${items.id}`}>
              <img src={items.data.image} alt={items.data.name}/>
              <h1>{items.data.name}</h1>
            </a>
          </C.Item>
        ))}
      </C.ListSugestions>
    </C.Container>
  );
}