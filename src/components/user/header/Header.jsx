import { Container, Row, Col} from 'react-bootstrap';
import SearchBar from '../search-bar/SearchBar';
import ExactCalendar from './calendar/ExactCalendar';
import './Header.css';

export default function Header() {
  return (
    <Container className="header-section">
      <Row className="justify-content-center align-items-center mt-5 mb-5 main-header">
        <Col xs={12} md={6} className="text-start main-header-left">
          <h1>
            Book the Best <br />
            <span className="span-ls">Local Service</span> in
            <br />
            Seconds!
          </h1>
          <p>
            Embark on the most simplified and personalized
            <br />
            booking journey out there with Jiffy Bookings
          </p>
        </Col>

        <Col xs={12} md={6}>
        <ExactCalendar />
        </Col>
      </Row>

      <SearchBar />
    </Container>
  );
}
