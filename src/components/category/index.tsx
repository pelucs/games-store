import * as C from './styles';
import { useState } from 'react';
import { 
  CaretDown, 
  ComputerTower, 
  FinnTheHuman, 
  GameController, 
  Headset, 
  Keyboard, 
  MouseSimple 
} from 'phosphor-react';

export default () => {

  const [isCategory, setIsCategory] = useState<boolean>(true);

  const handleCadegory = () => {
    setIsCategory(!isCategory);
  }

  return(
    <C.Category>
          <button onClick={handleCadegory}>
            <span>Categorias</span>
            <span>
              <CaretDown 
                weight="bold"
                color="var(--dark-100)"
                className={`w-4 h-4 transition-all ${ isCategory ? "rotate-180" : "rotate-0" }`} 
              />
            </span>
          </button>
          <C.ListCategory done={isCategory}>
            <a href="#">
              <MouseSimple 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Mouse
              </C.Title>
            </a>
            <a href="#">
              <Headset 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Headset
              </C.Title>
            </a>
            <a href="#">
              <GameController 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Controle
              </C.Title>
            </a>
            <a href="#">
              <Keyboard 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Teclado
              </C.Title>
            </a>
            <a href="#">
              <ComputerTower 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Computador
              </C.Title>
            </a>
            <a href="#">
              <FinnTheHuman 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Jogos
              </C.Title>
            </a>
          </C.ListCategory>
        </C.Category>
  );
}