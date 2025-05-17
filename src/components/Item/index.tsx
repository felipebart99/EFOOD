// Item/index.tsx
import { useState } from 'react'
import { Card } from './styles'
import Modal from '../Modal'

type Props = {
  id: number
  title: string
  description: string
  image: string
  price: number
  porcao: string
}

const Item = ({ id, title, description, image, price, porcao }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>
            {description.length > 132
              ? `${description.slice(0, 132)}...`
              : description}
          </p>
          <button onClick={() => setModalOpen(true)}>
            Adicionar ao carrinho
          </button>
        </div>
      </Card>

      <Modal
        id={id}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        description={description}
        price={price}
        porcao={porcao}
        image={image}
      />
    </>
  )
}

export default Item
