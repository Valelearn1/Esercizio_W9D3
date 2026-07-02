import { Form } from "react-bootstrap";

function Search({ searchTitle, onSearchChange }) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Find a book:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title of the book..."
          value={searchTitle}
          onChange={(e) => onSearchChange(e.target.value)}
          className="fontStyle"
        />
      </Form.Group>
    </Form>
  );
}

export default Search;
