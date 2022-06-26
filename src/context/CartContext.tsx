import { createContext, ReactNode, useState } from "react";
import { IProducts } from '../types';

interface ICartProvider {
  children: ReactNode;
}

interface IItemsContext {
  cart: IProducts[];
  addProductCart: (item: IProducts) => void;
  removeProductCart: (id: number) => void;
}

export const CartContext = createContext({} as IItemsContext);
 
export const CartProvider = ({ children }: ICartProvider) => {

  const [cart, setCart] = useState<IProducts[]>([]);

  //ADCIONAR ITEM AO CARRINHO
  const addProductCart = (newItem: IProducts) => {
    setCart([...cart, newItem]);
  }

  //REMOVER ITEM DO CARRINHO
  const removeProductCart = (id: number) => {
    const removeItem = cart.filter(item => item.id !== id);
    setCart(removeItem);
  }

  return(
    <CartContext.Provider value={{ cart, addProductCart, removeProductCart }}>
      {children}
    </CartContext.Provider>
  );
}