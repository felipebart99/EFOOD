// Modal/index.tsx
import {
  ModalContainer,
  ModalOverlay,
  ModalContent,
  ModalFooter
} from './styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  price: number
  porcao: string
  image: string
}

const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  price,
  porcao,
  image
}: ModalProps) => {
  if (!isOpen) return null

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Serve: {porcao}</p>
          <p>Preço: R$ {price.toFixed(2)}</p>
        </ModalContent>
        <ModalFooter>
          <button onClick={onClose} className="secondary">
            Cancelar
          </button>
          <button onClick={onConfirm}>
            Adicionar ao carrinho - R$ {price.toFixed(2)}
          </button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
