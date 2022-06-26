import * as C from './styles';

export default () => {
  return(
    <C.Container>
      <h1>Promoções</h1>

      <C.Promotions>
        <C.PromotionBox>
          <C.InfoPromotion>
            <h2>Mouse Gamer com até</h2>
            <h1>40% <span>de desconto</span></h1>
            <C.Info>
              <h1>Melhore suas skills</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies velit id 
              erat vehicula ultricies. Etiam aliquam iaculis arcu nec cursus.</p>
            </C.Info>
          </C.InfoPromotion>

          <C.ButtonPromotion>
            <button>Ver produtos</button>
          </C.ButtonPromotion>
        </C.PromotionBox>

        <C.PromotionBox>
          <C.InfoPromotion>
            <h2>Headset Gamer com até</h2>
            <h1>30% <span>de desconto</span></h1>
            <C.Info>
              <h1>Tenha a melhor experiência</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies velit id 
              erat vehicula ultricies. Etiam aliquam iaculis arcu nec cursus.</p>
            </C.Info>
          </C.InfoPromotion>

          <C.ButtonPromotion>
            <button>Ver produtos</button>
          </C.ButtonPromotion>
        </C.PromotionBox>
      </C.Promotions>
    </C.Container>
  );
}