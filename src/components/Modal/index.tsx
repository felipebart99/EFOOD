// Modal/index.tsx
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
import { ModalContainer, ModalOverlay, ModalContent, Button } from './styles'
import closeIcon from '../../assets/images/close.png'
import { formatPrice } from '../../utils/formatPrice'
import { open } from '../../store/reducers/cart'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  price: number
  porcao: string
  image: string
  id: number // Adicionando id para o item do cardápio
}

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  price,
  porcao,
  image,
  id
}: ModalProps) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const handleAddToCart = () => {
    dispatch(
      add({
        id,
        nome: title,
        descricao: description,
        preco: price,
        porcao,
        foto: image
      })
    )
    onClose()
    openCart()
  }

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <img src={image} alt={title} />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Serve: {porcao}</p>

            <Button onClick={handleAddToCart}>
              Adicionar ao carrinho - {formatPrice(price)}
            </Button>
          </div>
        </ModalContent>
        <Button onClick={onClose} variant="secondary">
          <img src={closeIcon} alt="Fechar" />
        </Button>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
