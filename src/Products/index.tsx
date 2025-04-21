import Product from '../components/Product'
import { Container, List } from './styles'
import sushi from '../assets/images/sushi.png'
import macarrao from '../assets/images/macarrao.png'

const Products = () => (
  <Container>
    <List>
      <Product
        title="Nome da Loja"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero! Eveniet aliquid id sint minus perferendis ratione ipsa enim consequatur, vel molestiae, nihil perspiciatis exercitationem ipsum sapiente officia saepe dignissimos."
        image={sushi}
        avaliacao="4.9"
        infos={['Destaque da semana', 'Japonesa']}
      />
      <Product
        title="Nome da Loja"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero! Eveniet aliquid id sint minus perferendis ratione ipsa enim consequatur, vel molestiae, nihil perspiciatis exercitationem ipsum sapiente officia saepe dignissimos."
        image={macarrao}
        avaliacao="4.9"
        infos={['Italiana']}
      />
      <Product
        title="Nome da Loja"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero! Eveniet aliquid id sint minus perferendis ratione ipsa enim consequatur, vel molestiae, nihil perspiciatis exercitationem ipsum sapiente officia saepe dignissimos."
        image={macarrao}
        avaliacao="4.9"
        infos={['Italiana']}
      />
      <Product
        title="Nome da Loja"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero! Eveniet aliquid id sint minus perferendis ratione ipsa enim consequatur, vel molestiae, nihil perspiciatis exercitationem ipsum sapiente officia saepe dignissimos."
        image={macarrao}
        avaliacao="4.9"
        infos={['Italiana']}
      />
    </List>
  </Container>
)
export default Products
