import Header from '../../components/Header'
import Products from '../../Products'
import { Container } from '../../styles'

const Home = () => (
  <>
    <div>
      <Header />
      <Container>
        <Products />
      </Container>
    </div>
  </>
)
export default Home
