// Modal/index.tsx
import { ModalContainer, ModalOverlay, ModalContent, Button } from './styles'
import closeIcon from '../../assets/images/close.png'

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
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Serve: de {porcao}</p>

            <Button onClick={onConfirm}>
              Adicionar ao carrinho - R$ {price.toFixed(2)}
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
