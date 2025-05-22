import { useFormik } from 'formik'
import {
  ButtonSubmit,
  CartContainer,
  InputGroup,
  Overlay,
  Row,
  Sidebar
} from './styles'
import * as Yup from 'yup'
import { useState } from 'react'
const Checkout = () => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
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
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isInvalid && isTouched) return message
    return ''
  }

  const [payCardOpen, setpayCardOpen] = useState(false)

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer>
        <Overlay />
        <Sidebar>
          {payCardOpen ? (
            <>
              <h1>Pagamento - Valor a pagar R$ 190,90</h1>
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
                    <br />
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
                    <br />
                    <small>
                      {getErrorMessage('number', form.errors.number)}
                    </small>
                  </InputGroup>
                </Row>
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
                    <br />
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
                    <br />
                    <small>
                      {getErrorMessage('number', form.errors.number)}
                    </small>
                  </InputGroup>
                </Row>
              </div>
              <ButtonSubmit>Finalizar pagamento</ButtonSubmit>
              <ButtonSubmit onClick={() => setpayCardOpen(false)}>
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
                    <br />
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
                    <br />
                    <small>
                      {getErrorMessage('number', form.errors.number)}
                    </small>
                  </InputGroup>
                </Row>
                <InputGroup>
                  <label htmlFor="complement">Complemento(opcional)</label>
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
              <ButtonSubmit onClick={() => setpayCardOpen(true)}>
                Continuar com o pagamento
              </ButtonSubmit>
              <ButtonSubmit>Voltar para o carrinho</ButtonSubmit>
            </>
          )}
        </Sidebar>
      </CartContainer>
    </form>
  )
}
export default Checkout
