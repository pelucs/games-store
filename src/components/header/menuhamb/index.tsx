import * as C from './styles';
import { Popover } from '@headlessui/react';
import { 
  ComputerTower, 
  FinnTheHuman, 
  GameController, 
  GithubLogo, 
  Headset, 
  InstagramLogo, 
  Keyboard, 
  LinkedinLogo, 
  MouseSimple, 
  TelegramLogo, 
} from 'phosphor-react';

import CloseButton from '../../closebutton';
import logo from '../../../assets/logotipo.png';

interface MenuHambProps{
  onHandleScroll: (newState: boolean) => void;
}

export default ({ onHandleScroll }: MenuHambProps) => {

  return(
    <Popover>
      <Popover.Panel
        className="w-screen h-screen fixed top-0 left-0 bg-[#212123] z-10"
      >
        <C.HeaderPanel>
          <h1>Menu</h1>
          <CloseButton onHandleScroll={onHandleScroll}/>
        </C.HeaderPanel>
        <C.MenuBox>
          <C.Links>
            <a href="#">
                <MouseSimple 
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-5 h-5 mr-2" 
                />
                  Mouse
              </a>
              <a href="#">
                <Headset 
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-5 h-5 mr-2" 
                />
                  Headset
              </a>
              <a href="#">
                <GameController 
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-5 h-5 mr-2" 
                />
                  Controle
              </a>
              <a href="#">
                <Keyboard 
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-5 h-5 mr-2" 
                />
                  Teclado
              </a>
              <a href="#">
                <ComputerTower 
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-5 h-5 mr-2" 
                />
                  Computador
              </a>
              <a href="#">
                <FinnTheHuman 
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-5 h-5 mr-2" 
                />
                  Jogos
              </a>
          </C.Links>
          <C.LogoSociais>
            <C.Sociais>
              <a href="">
                <InstagramLogo
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-6 h-6" 
                />
              </a>
              <a href="">
                <GithubLogo
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-6 h-6" 
                />
              </a>
              <a href="">
                <LinkedinLogo
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-6 h-6" 
                />
              </a>
              <a href="">
                <TelegramLogo
                  weight="bold"
                  color="var(--dark-100)"
                  className="w-6 h-6" 
                />
              </a>
            </C.Sociais>
            <a href="/">
              <img src={logo}/>
            </a>
          </C.LogoSociais>
        </C.MenuBox>
      </Popover.Panel>

      <Popover.Button onClick={() => onHandleScroll(true)}>
        <C.MenuHamb></C.MenuHamb>
      </Popover.Button>
    </Popover>
  );
}