import * as C from './styles';
import { CaretDown, 
  Gear, 
  Heart, 
  MagnifyingGlass, 
  User,
  MouseSimple,
  Headset,
  GameController,
  Keyboard,
  ComputerTower,
  FinnTheHuman,
  House,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
  Cube
} from 'phosphor-react';

import logo from '../../assets/logotipo.png';
import { useState } from 'react';
import Category from '../category';

export default () => {
  return(
    <C.Sidebar>
      <C.Logo>
        <a href="/">
          <img src={logo} alt="Capacete de gladiador"/>
        </a>
      </C.Logo>

      <C.LinksBox>
        <C.Menu>
          <h1>Menu</h1>
          <a href="/">
            <House 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Home
            </C.Title>
          </a>
          <a href="#">
            <User 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Perfil
            </C.Title>
          </a>
          <a href="#">
            <Cube 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Meus pedidos
            </C.Title>
          </a>
          <a href="#">
            <Heart 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Favoritos
            </C.Title>
          </a>
          <a href="#">
            <Gear 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Configurações
            </C.Title>
          </a>
        </C.Menu>

        <Category/>

        <C.Social>
          <a href="#">
            <InstagramLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>

          <a href="#">
            <GithubLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>

          <a href="#">
            <LinkedinLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>

          <a href="#">
            <TelegramLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>
        </C.Social>
      </C.LinksBox>
    </C.Sidebar>
  );
}