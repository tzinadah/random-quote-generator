import QuoteDisplay from "./QuoteDisplay";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./custom.scss"

function App() {
  return (  
    <div className="App"> 
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col xs={8} className="bg-dark text-light rounded p-2">
            <h1 className="fw-bold">Random Quote Generator</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={8} className="bg-light text-dark rounded p-5">
            <QuoteDisplay />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
