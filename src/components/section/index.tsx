import * as C from './styles';
import Banner from './banner';
import ButtosProduct from './buttosproduct';
import Items from './items';
import Games from './games';
import Promotions from './promotions';

export default () => {

  return(
    <C.Container>
      <Banner/>
      <ButtosProduct/>
      <Items/>
      <Promotions/>
      <Games/>
    </C.Container>
  );
}