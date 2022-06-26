import * as C from './styles';
import { 
  Cube, 
  Gear, 
  HandbagSimple, 
  Heart, 
  House 
} from 'phosphor-react';

export default () => {
  return(
    <C.Container>
      <C.Links>
        <a href="/" title="Home">
          <House
            color="var(--dark-100)"
            className="w-6 h-6"
          />
        </a>
        <a href="/" title="Meus pedidos">
          <Cube
            color="var(--dark-100)"
            className="w-6 h-6"
          />
        </a>
        <a href="/" title="Sacola">
          <HandbagSimple
            color="var(--dark-100)"
            className="w-6 h-6"
          />
        </a>
        <a href="/" title="Favoritos">
          <Heart
            color="var(--dark-100)"
            className="w-6 h-6"
          />
        </a>
        <a href="/" title="Configurações">
          <Gear
            color="var(--dark-100)"
            className="w-6 h-6"
          />
        </a>
      </C.Links>
    </C.Container>
  );
}