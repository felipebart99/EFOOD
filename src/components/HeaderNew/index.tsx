import logo from '../../assets/images/logo.svg'
import { HeaderBar } from './styles'

const HeaderNew = () => (
  <HeaderBar>
    Restaurantes
    <img src={logo} alt="EFOOD" />0 produto(s) no carrinho
  </HeaderBar>
)
export default HeaderNew
