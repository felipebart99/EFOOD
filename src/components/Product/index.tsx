import { Card, Infos, Tag } from './styles'
import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  avaliacao: string
  infos: string[]
}
const Product = ({ title, description, image, avaliacao, infos }: Props) => (
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
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
  </Card>
)
export default Product
