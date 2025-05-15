import {
  ButtonSubmit,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar
} from './styles'
import pizza from '../../assets/images/pizza.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome do comida</h3>
            <p>R$ 60,90</p>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome do comida</h3>
            <p>R$ 60,90</p>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        <p>Valor total</p>
        <p>R$ 182,70</p>
      </Prices>
      <ButtonSubmit>Continuar com a entrega</ButtonSubmit>
    </Sidebar>
  </CartContainer>
)
export default Cart
