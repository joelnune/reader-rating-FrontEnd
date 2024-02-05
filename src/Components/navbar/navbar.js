import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'
import Search from '../../img/search.svg'
import Logo from '../../img/book-logo.png'
import { useState } from 'react';
import axios from 'axios';
import BodyComponent from '../body/body';

function NavBarComponent() {

  const [book, setBook] = useState('');

  function handleChange(e) {
    setBook(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://www.googleapis.com/books/v1/volumes?q=${book}`,
      headers: { }
    };
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.totalItems));
      BodyComponent(response.data)
    })
    .catch((error) => {
      console.log(error);
    });

}
  return (
    <>
      <Navbar>
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

export default NavBarComponent;