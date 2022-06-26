import { createContext, useState, ReactNode } from "react";
import { IProducts } from '../types';
import { items } from '../object/object';

interface IFilterProvider {
  children: ReactNode;
}

interface IItemFilterContext {
  products: IProducts[];
  handleFilterItems: (emphasis: string) => void;
}

export const ItemsContext = createContext({} as IItemFilterContext);

export const ItemsProvider = ({ children }: IFilterProvider) => {
  
  const [products, setProducts] = useState<IProducts[]>(
    items.filter(filter => filter.departament === "computing")
  );
  
  //FILTRAR ITENS
  const handleFilterItems = (emphasis: string) => {

    if(emphasis === "ALL"){
      let newItems = items.filter(filter => filter.departament === "computing");

      setProducts(newItems);
      
    } else{
      let newItems = items.filter(filter => filter.emphasis === emphasis && filter.departament === "computing");
      
      setProducts(newItems);
    }
  }

  return(
    <ItemsContext.Provider value={{ products, handleFilterItems }}>
      {children}
    </ItemsContext.Provider>
  );
}