import Footer from '../../components/Footer'
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
      <Footer />
    </div>
  </>
)
export default Home
