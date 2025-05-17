import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { CartButton, Container, HeaderBar, LinkEstilizado } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderNew = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <Container>
        <LinkEstilizado to="/">Restaurantes</LinkEstilizado>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </Container>
    </HeaderBar>
  )
}
export default HeaderNew
