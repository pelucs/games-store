import { Routes, Route } from 'react-router-dom';
import { items } from './object/object';

import App from './routes/home/App';
import Product from './routes/product';

export default () => {

  return(
    <Routes>
      <Route path="/" element={<App/>}/>
      {items.map(item => (
        <Route key={item.id} path={`/${item.id}`} element={<Product product={item}/>}/>
      ))}
    </Routes>
  );
}