import * as C from './styles';
import { useState, useContext } from 'react';
import { ItemsContext } from '../../../context/FilterItemsContext';

export default () => {

  const [isTop, setIsTop] = useState<boolean>(true);
  const [isPopular, setIsPopular] = useState<boolean>(false);
  const [isMostSold, setIsMostSold] = useState<boolean>(false);
  const { handleFilterItems } = useContext(ItemsContext);

  const handleButtonCategory = (val: string) => {
    if(val === "ALL"){
      setIsTop(!isTop);
      setIsPopular(false);
      setIsMostSold(false);
      handleFilterItems(val);
    } 
    
    if(val === "POPULAR"){
      setIsPopular(!isPopular);
      setIsTop(false);
      setIsMostSold(false);
      handleFilterItems(val);
    }
    
    if(val === "SOLD"){
      setIsMostSold(!isMostSold);
      setIsPopular(false);
      setIsTop(false);
      handleFilterItems(val);
    }
  }

  return(
    <C.ButtonsProducts
      isTop={isTop}
      isPopular={isPopular}
      isMostSold={isMostSold}
    >
      <h1>Nossos produtos</h1>
      <button onClick={() => handleButtonCategory("ALL")}>Todos</button>
      <button onClick={() => handleButtonCategory("POPULAR")}>Popular</button>
      <button onClick={() => handleButtonCategory("SOLD")}>Mais vendidos</button>
    </C.ButtonsProducts>
  );
}