import { Card } from './styles'

type Props = {
  title: string
  description: string
  image: string
}
const Item = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Adicionar ao carrinho</button>
    </div>
  </Card>
)
export default Item
