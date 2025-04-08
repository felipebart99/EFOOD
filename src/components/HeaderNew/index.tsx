import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, LinkEstilizado } from './styles'

const HeaderNew = () => (
  <HeaderBar>
    <LinkEstilizado to="/">Restaurantes</LinkEstilizado>
    <Link to="/">
      <img src={logo} alt="EFOOD" />
    </Link>
    0 produto(s) no carrinho
  </HeaderBar>
)
export default HeaderNew
