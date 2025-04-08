import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderNew from '../../components/HeaderNew'
import ItemList from '../../components/ItemList'
import { Container } from '../../styles'

const Perfil = () => (
  <>
    <div>
      <HeaderNew />
      <Banner />
      <Container>
        <ItemList />
      </Container>
      <Footer />
    </div>
  </>
)
export default Perfil
