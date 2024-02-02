import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'
import Search from '../img/search.svg'
import Logo from '../img/book-logo.png'
import { useState } from 'react';
function ColorSchemesExample() {
  const [book, setBook] = useState('');

  function handleChange(e) {
    setBook(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(book)

}
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
            <img src={Logo} className='logo'/>       
          <Navbar.Brand href="#home">ReaderRating</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Favoritos</Nav.Link>
            <Nav.Link href="#pricing">Minhas análises</Nav.Link>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={book}
              onChange={handleChange}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" >
                <img src={Search} className='search'/>
            </Button>
          </Col>
        </Row>
      </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;