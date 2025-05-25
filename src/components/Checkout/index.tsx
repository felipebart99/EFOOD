// Checkout/index.tsx
import { useFormik } from 'formik'
import {
  ButtonSubmit,
  CartContainer,
  InputGroup,
  Overlay,
  Row,
  Sidebar,
  SuccessMessage
} from './styles'
import * as Yup from 'yup'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { open, clear } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/formatPrice'
import { v4 as uuidv4 } from 'uuid'

interface CheckoutProps {
  onClose: () => void
  totalPrice: number
}

const Checkout = ({ onClose, totalPrice }: CheckoutProps) => {
  const [payCardOpen, setPayCardOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
    onClose()
  }
  const clearCart = () => {
    dispatch(clear())
  }
  const [orderId, setOrderId] = useState('')

  const form = useFormik({
    initialValues: {
      // Dados de entrega
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      // Dados do cartão
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      // Validação dos dados de entrega
      receiver: Yup.string()
        .min(5, 'O nome precisa ter no mínimo 5 caracteres')
        .max(100, 'O nome não pode ter mais de 100 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter no mínimo 5 caracteres')
        .max(200, 'O endereço não pode ter mais de 200 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter no mínimo 3 caracteres')
        .max(100, 'A cidade não pode ter mais de 100 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .matches(
          /^\d{5}-?\d{3}$/,
          'CEP inválido (formato esperado: 00000-000 ou 00000000)'
        )
        .required('O campo é obrigatório'),
      number: Yup.string()
        .matches(/^\d+$/, 'Apenas números são permitidos')
        .required('O campo é obrigatório'),
      complement: Yup.string().max(
        100,
        'O complemento não pode ter mais de 100 caracteres'
      ),
      // Validação dos dados do cartão
      cardName: Yup.string()
        .min(5, 'O nome no cartão precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'O CVV deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      cardMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido (01-12)')
        .required('O campo é obrigatório'),
      cardYear: Yup.string()
        .matches(/^\d{4}$/, 'Ano inválido (formato: YYYY)')
        .required('O campo é obrigatório')
    }),
    onSubmit: async () => {
      await handleFinalizePayment()
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isInvalid && isTouched) return message
    return ''
  }

  const isDeliveryValid = () => {
    const requiredFields = ['receiver', 'address', 'city', 'zipCode', 'number']
    return requiredFields.every(
      (field) =>
        form.values[field as keyof typeof form.values] &&
        !form.errors[field as keyof typeof form.errors]
    )
  }

  const handleFinalizePayment = async () => {
    const errors = await form.validateForm()
    if (Object.keys(errors).length > 0) {
      form.setTouched({
        ...form.touched,
        cardName: true,
        cardNumber: true,
        cardCode: true,
        cardMonth: true,
        cardYear: true
      })
      return
    }

    setIsLoading(true)

    try {
      const payload = {
        products: [{ id: 1, price: 190.9 }], // Substitua pelos dados reais do carrinho
        delivery: {
          receiver: form.values.receiver,
          address: {
            description: form.values.address,
            city: form.values.city,
            zipCode: form.values.zipCode,
            number: Number(form.values.number),
            complement: form.values.complement || ''
          }
        },
        payment: {
          card: {
            name: form.values.cardName,
            number: form.values.cardNumber,
            code: Number(form.values.cardCode),
            expires: {
              month: Number(form.values.cardMonth),
              year: Number(form.values.cardYear)
            }
          }
        }
      }

      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }
      setOrderId(`ORD-${uuidv4().split('-')[0]}`.toUpperCase())
      setPaymentCompleted(true)
    } catch (error) {
      console.error('Falha no pagamento:', error)
      alert('Falha ao processar pagamento. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null
  if (paymentCompleted) {
    return (
      <CartContainer>
        <Overlay />
        <Sidebar>
          <SuccessMessage>
            <h2>Pedido realizado - {orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </SuccessMessage>
          <ButtonSubmit
            type="button"
            onClick={() => {
              onClose() // Fecha o modal/checkout
              clearCart() // Limpa o carrinho
            }}
            disabled={isLoading}
          >
            Concluir
          </ButtonSubmit>
        </Sidebar>
      </CartContainer>
    )
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer>
        <Overlay />
        <Sidebar>
          {payCardOpen ? (
            <>
              <h1>Pagamento - Valor a pagar {formatPrice(totalPrice)}</h1>
              <div>
                <InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    type="text"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardName', form.errors.cardName)}
                  </small>
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      maxLength={16}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      maxLength={3}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardMonth">Mês de vencimento</label>
                    <input
                      id="cardMonth"
                      type="text"
                      name="cardMonth"
                      value={form.values.cardMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      placeholder="MM"
                      maxLength={2}
                    />
                    <small>
                      {getErrorMessage('cardMonth', form.errors.cardMonth)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardYear">Ano de vencimento</label>
                    <input
                      id="cardYear"
                      type="text"
                      name="cardYear"
                      value={form.values.cardYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      placeholder="AAAA"
                      maxLength={4}
                    />
                    <small>
                      {getErrorMessage('cardYear', form.errors.cardYear)}
                    </small>
                  </InputGroup>
                </Row>
              </div>
              <ButtonSubmit
                type="button"
                onClick={handleFinalizePayment}
                disabled={isLoading}
              >
                {isLoading ? 'Processando...' : 'Finalizar pagamento'}
              </ButtonSubmit>
              <ButtonSubmit
                type="button"
                onClick={() => setPayCardOpen(false)}
                disabled={isLoading}
              >
                Voltar para edição de endereço
              </ButtonSubmit>
            </>
          ) : (
            <>
              <h1>Entrega</h1>
              <div>
                <InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    type="text"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('receiver', form.errors.receiver)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('address', form.errors.address)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('city', form.errors.city)}</small>
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <input
                      id="zipCode"
                      type="text"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('zipCode', form.errors.zipCode)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('number', form.errors.number)}
                    </small>
                  </InputGroup>
                </Row>
                <InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('complement', form.errors.complement)}
                  </small>
                </InputGroup>
              </div>
              <ButtonSubmit
                type="button"
                onClick={() => setPayCardOpen(true)}
                disabled={!isDeliveryValid()}
                className={!isDeliveryValid() ? 'disabled' : ''}
              >
                Continuar com o pagamento
              </ButtonSubmit>
              <ButtonSubmit type="button" onClick={openCart}>
                Voltar para o carrinho
              </ButtonSubmit>
            </>
          )}
        </Sidebar>
      </CartContainer>
    </form>
  )
}

export default Checkout
