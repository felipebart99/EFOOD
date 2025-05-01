import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Container, HeaderBar, LinkEstilizado } from './styles'

const HeaderNew = () => (
  <HeaderBar>
    <Container>
      <LinkEstilizado to="/">Restaurantes</LinkEstilizado>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      0 produto(s) no carrinho
    </Container>
  </HeaderBar>
)
export default HeaderNew
