import {
  ButtonSubmit,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/formatPrice'
import { MenuItem } from '../../types'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = (): number => {
    return items.reduce((acc: number, item: MenuItem) => acc + item.preco, 0)
  }

  if (!isOpen) {
    return null
  }
  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item: MenuItem) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Prices>
        <ButtonSubmit>Continuar com a entrega</ButtonSubmit>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
