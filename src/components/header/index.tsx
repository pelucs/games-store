import * as C from './styles';
import { Popover } from '@headlessui/react';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { 
  Bell, 
  Cube, 
  Handbag, 
  MagnifyingGlass, 
  User, 
  X
} from 'phosphor-react';

import MenuHamb from './menuhamb';
import CloseButton from '../closebutton';
import ListItems from './listitems';

export default () => {

  const { cart } = useContext(CartContext);

  const handleScroll = (newState: boolean) => {
    if(newState){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "auto";
    }
  }

  window.addEventListener("change", () => {
    // let widthX = window.screenX;

    console.log("Ola")
  })

  return(
    <C.Header>
      <MenuHamb onHandleScroll={handleScroll}/>

      <C.SearchBox>
        <MagnifyingGlass
          weight="bold"
          color="var(--dark-100)"
          className="w-4 h-4 absolute top-1/4 left-2" 
        />
        <input type="text" placeholder="Pesquise aqui..."/>
      </C.SearchBox>

      <C.NotifyCart>
        <Popover className="relative">
          <Popover.Panel
            className="w-40 bg-[#28282a] fixed top-14 right-28 z-50 rounded-sm"
          >
            <C.LinksPanel>
              <a href="">
                <User
                  weight="bold"
                  color="#fff"
                  className="w-4 h-4 mr-2" 
                />
                Perfil
              </a>
              <a href="#">
                <Cube
                  weight="bold"
                  color="#fff"
                  className="w-4 h-4 mr-2" 
                />
                Meus pedidos
              </a>
            </C.LinksPanel>
          </Popover.Panel>

          <Popover.Button
            className="w-5 h-5 mr-3 relative flex items-center justify-center focus:outline 
            outline-2 outline-offset-2 outline-[#8a4af3] rounded-sm"
          >
            <User
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </Popover.Button>
        </Popover>

        <Popover className="relative">
          <Popover.Panel
            className="w-full max-w-sm h-screen bg-[#28282a] fixed right-0 top-0 z-10"
          >
            <C.HeaderPanel>
              <h1>Notificações</h1>
              <CloseButton onHandleScroll={handleScroll} />
            </C.HeaderPanel>

            <C.BoxNotification>
              <h1>Você não possui <br></br> nenhuma notificação</h1>
            </C.BoxNotification>

          </Popover.Panel>              

          <Popover.Button 
            className="w-5 h-5 mr-4 relative flex items-center justify-center focus:outline 
            outline-2 outline-offset-2 outline-[#8a4af3] rounded-sm"
            onClick={() => handleScroll(true)}
          >
            <Bell 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
            <span>0</span>
          </Popover.Button>
        </Popover>

        <Popover className="relative">
          <Popover.Panel
            className="w-full max-w-sm h-screen bg-[#28282a] fixed right-0 top-0 z-10 overflow-y-auto"
          >
            <C.HeaderPanel>
              <h1>Sacola de itens</h1>
              <CloseButton onHandleScroll={handleScroll} />
            </C.HeaderPanel>

            <ListItems/>
          </Popover.Panel>

          <Popover.Button 
            className="w-5 h-5 mr-4 relative flex items-center justify-center focus:outline 
            outline-2 outline-offset-2 outline-[#8a4af3] rounded-sm"
            onClick={() => handleScroll(true)}
          >
            <Handbag 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
            <span>{cart.length}</span>
          </Popover.Button>
        </Popover>
      </C.NotifyCart>
    </C.Header>
  );
}