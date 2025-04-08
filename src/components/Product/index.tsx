import { Card, Tag } from './styles'
import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  avaliacao: string
}
const Product = ({ title, description, image, avaliacao }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="principal">
      <h3>{title}</h3>
      <div className="secundaria">
        <p>{avaliacao}</p>
        <img src={estrela} alt="estrela" />
      </div>
    </div>

    <p>{description}</p>
    <Link to="/perfil">
      <button>Saiba Mais</button>
    </Link>
    <Tag>Destaque da semana</Tag>
  </Card>
)
export default Product
