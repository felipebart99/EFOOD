import Item from '../Item'
import { Container, List } from './styles'
import pizza from '../../assets/images/pizza.png'

const ItemList = () => (
  <Container>
    <List>
      <Item
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        image={pizza}
      />
      <Item
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        image={pizza}
      />
      <Item
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        image={pizza}
      />
      <Item
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        image={pizza}
      />
      <Item
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        image={pizza}
      />
      <Item
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        image={pizza}
      />
    </List>
  </Container>
)
export default ItemList
