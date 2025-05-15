// ItemList/index.tsx

import Item from '../Item'
import { Container, List } from './styles'
import { MenuItem } from '../../types'

interface ItemListProps {
  items: MenuItem[]
}

const ItemList = ({ items }: ItemListProps) => {
  if (!items || items.length === 0) {
    return <div>Nenhum item disponível no cardápio</div>
  }

  return (
    <Container>
      <List>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.nome}
            description={item.descricao}
            image={item.foto}
            price={item.preco}
            porcao={item.porcao}
          />
        ))}
      </List>
    </Container>
  )
}

export default ItemList
