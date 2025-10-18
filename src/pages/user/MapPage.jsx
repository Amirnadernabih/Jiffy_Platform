import { Container } from 'react-bootstrap'
import MapComponent from '../../components/user/map/MapComponent'
import MapMarketplace from '../../components/user/MapMarketplace/MapMarketplace'
import SearchBar from '../../components/user/search-bar/SearchBar'
import './styles/MapPage.css'

export default function MapPage() {
  return (
    <div>
      <div>
      <Container fluid style={{ position: 'relative' }}>
  <MapComponent />

  <div className="search-bar-overlay">
    <SearchBar />
  </div>

  <MapMarketplace />
</Container>

    </div>

    </div>
  )
}
