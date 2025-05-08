// Banner/index.tsx
import { Container } from '../../styles'
import { BannerSection } from './styles'

interface BannerProps {
  image: string
  type: string
  title: string
}

const Banner = ({ image, type, title }: BannerProps) => (
  <BannerSection
    style={{
      backgroundImage: `linear-gradient(#00000080, #00000080), url(${image})`
    }}
  >
    <Container>
      <h2>{type}</h2>
      <h1>{title}</h1>
    </Container>
  </BannerSection>
)

export default Banner
