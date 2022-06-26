import './App.css';
import { CartProvider } from '../../context/CartContext'
import { ItemsProvider } from '../../context/FilterItemsContext';

import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import Section from '../../components/section';
import Menu from '../../components/menumobile';

export default () => {
  return(
    <CartProvider>
      <ItemsProvider>
        <Sidebar/>
        <Header/>
        <Section/>
        <Menu/>
      </ItemsProvider>
    </CartProvider>
  );
}