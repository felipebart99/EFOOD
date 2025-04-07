import { Card } from './styles'

type Props = {
  title: string
  description: string
  image: string
}
const Product = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button>Saiba Mais</button>
  </Card>
)
export default Product
