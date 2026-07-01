import { Form } from "react-bootstrap";

function Search({ searchTitle, onSearchChange }) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Cerca un libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Titolo del libro..."
          value={searchTitle}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default Search;
