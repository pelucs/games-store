import * as C from './styles';
import { PlusCircle } from 'phosphor-react';

export default () => {
  return(
    <C.BannerContainer>
      <button title="Adicionar a sacola">
        <PlusCircle
          color="var(--purple-primary)"
          className="w-10 h-10"
        />
      </button>
    </C.BannerContainer>
  );
}