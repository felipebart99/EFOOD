import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import redesSociais from '../../assets/images/redes sociais.svg'

import { Rodape } from './styles'

const Footer = () => (
  <Rodape>
    <div>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <img src={redesSociais} alt="EFOOD" />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Rodape>
)
export default Footer
