import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cards({ books }) {
  return (
    <Container>
      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={3}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} className="cardImg" />
              <Card.Body>
                <Card.Title className="cardTitle">{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
