import HabitTrackerApp from "./HabitTrackerComponents/HabitTrackerApp";
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <>
    <Container fluid>
      <Row>
        <Col xs={1}>nav</Col> 
        <Col><HabitTrackerApp /></Col> {/* where the current app goes */}
      </Row>
    </Container>
    
    </>
  );
}

export default App;
