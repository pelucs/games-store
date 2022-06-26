import headsetCorsair from '../assets/headset-corsair.png';
import headsetRazer from '../assets/headset-razer.png';
import mouseFortrek from '../assets/mouse-fortrek.png';
import mouseLogitech from '../assets/mouse-logitech.png';
import tecladoHyperx from '../assets/teclado-hyperx.png';
import cadeiraCorsair from '../assets/cadeira-corsair.png';
import notebookAcer from '../assets/notebook-acer.png';
import capaGta from '../assets/capa-gta.png';
import capaGow from '../assets/capa-gow.jpg';
import capaBattlefield from '../assets/capa-battlefield.png';

export const items = [{
    id: 1,
    brand: "hyperx",
    emphasis: "SOLD",
    departament: "computing",
    data: {
      name: "HyperX Alloy RGB",
      image: tecladoHyperx,
      price: "R$5.499,00",
      category: "Teclado Gamer", 
    }
  },
  {
    id: 2,
    brand: "razer",
    emphasis: "POPULAR",
    departament: "computing",
    data: {
      name: "Razer Kraken",
      image: headsetRazer,
      price: "R$5.499,00",
      category: "Headset Gamer", 
    }
  },
  {
    id: 3,
    brand: "logitech",
    emphasis: "SOLD",
    departament: "computing",
    data: {
      name: "Logitech G903 Lightspeed",
      image: mouseLogitech,
      price: "R$5.499,00",
      category: "Mouse Gamer", 
    }
  },
  {
    id: 4,
    brand: "corsair",
    emphasis: "TOP",
    departament: "computing",
    data: {
      name: "Corsair HS35 STEREO",
      image: headsetCorsair,
      price: "R$5.499,00",
      category: "Headset Gamer", 
    }
  },
  {
    id: 5,
    brand: "fortrek",
    emphasis: "SOLD",
    departament: "computing",
    data: {
      name: "Fortrek Vickers",
      image: mouseFortrek,
      price: "R$5.499,00",
      category: "Mouse Gamer", 
    }
  },
  {
    id: 6,
    brand: "corsair",
    emphasis: "SOLD",
    departament: "computing",
    data: {
      name: "Corsair T2 Road Warrior",
      image: cadeiraCorsair,
      price: "R$5.499,00",
      category: "Cadeira Gamer", 
    }
  },
  {
    id: 7,
    brand: "acer",
    emphasis: "POPULAR",
    departament: "computing",
    data: {
      name: "Acer Nitro 5 AMD Ryzen 7",
      image: notebookAcer,
      price: "R$5.499,00",
      category: "Notebook Gamer", 
    }
  },
  {
    id: 8,
    brand: "sony",
    emphasis: "",
    departament: "game",
    data: {
      name: "God Of War: Ragnarok",
      image: capaGow,
      price: "R$299,00",
      category: "PS4", 
    }
  },
  {
    id: 9,
    brand: "rockstar",
    emphasis: "",
    departament: "game",
    data: {
      name: "GTA V",
      image: capaGta,
      price: "R$299,00",
      category: "PC Game", 
    }
  },
  {
    id: 10,
    brand: "electronicarts",
    emphasis: "",
    departament: "game",
    data: {
      name: "Battlefield I",
      image: capaBattlefield,
      price: "R$299,00",
      category: "PC Game", 
    }
  }
]