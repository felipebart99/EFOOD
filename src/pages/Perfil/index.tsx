// Perfil/index.tsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderNew from '../../components/HeaderNew'
import ItemList from '../../components/ItemList'
import { Container } from '../../styles'

interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Array<{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }>
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setRestaurant(res)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Erro ao buscar restaurante:', error)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

  return (
    <>
      <div>
        <HeaderNew />
        <Banner
          image={restaurant.capa}
          type={restaurant.tipo}
          title={restaurant.titulo}
        />
        <Container>
          <ItemList items={restaurant.cardapio} />
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Perfil
