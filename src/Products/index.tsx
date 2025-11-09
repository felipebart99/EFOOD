import Product from '../components/Product'
import { Container, List } from './styles'
import { useEffect, useState } from 'react'
import { Restaurant } from '../types'

const Products = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <Product
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.titulo}
            description={restaurant.descricao}
            image={restaurant.capa}
            avaliacao={restaurant.avaliacao}
            infos={[restaurant.tipo]}
          />
        ))}
      </List>
    </Container>
  )
}
export default Products
