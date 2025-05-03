// ItemList/index.tsx
import { useState, useEffect } from 'react'
import Item from '../Item'
import { Container, List } from './styles'
import { MenuItem } from '../../types'

const ItemList = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )

        if (!response.ok) {
          throw new Error('Erro ao carregar os itens')
        }

        const data = await response.json()
        // Vamos pegar todos os itens do cardápio de todos os restaurantes
        const allMenuItems = data.flatMap(
          (restaurante: any) => restaurante.cardapio
        )
        setMenuItems(allMenuItems)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMenuItems()
  }, [])

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error}</div>

  return (
    <Container>
      <List>
        {menuItems.map((item) => (
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
