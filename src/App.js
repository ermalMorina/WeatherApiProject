import { Col, Row } from 'reactstrap';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md="3" />
        <Col md="6">
          <NavBar />
          <Routes />
        </Col>
        <Col md="3" />
      </Row>
    </div>
  );
}

export default App;
