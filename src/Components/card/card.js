import React from 'react'
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Love from '../../img/love.png'
import { useNavigate } from 'react-router-dom';
import './card.css'
export default function CardComponent({ book }) {
 // console.log(book);
 const navigate = useNavigate()
  if (book.volumeInfo)
    return (
        
        <Card onClick={()=>{navigate('/details', {state: book})}}>  
          <Card.Img  variant='bottom' src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} />
        
            <Card.Body>
            <Card.Title>{book.volumeInfo.title.slice(0,50)}</Card.Title>
              <Card.Text>    
                {book.volumeInfo.description ? book.volumeInfo.description.slice(0,200)+"..." : "Sem informações" }
              </Card.Text>
              <div className='button-group'> 
              <Button variant="light" size="sm">:D</Button>
              <Button variant="light" size="sm">:/</Button>
              <Button variant="light" size="sm">
              <img src={Love} className='love' />
              </Button>
              </div>
          </Card.Body>
          <ListGroup className="list-group-flush" style={{  backgroundColor: "#F0E7DE"}}>
            <ListGroup.Item>Autor: {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Sem informações"}</ListGroup.Item>
            <ListGroup.Item>Data de publicação: {book.volumeInfo.publishedDate}</ListGroup.Item>
            <ListGroup.Item>Número de páginas: {book.volumeInfo.pageCount}</ListGroup.Item>
          </ListGroup>

        </Card>
      
    )
   else{
    return (

      <h1>Sem Resultados :/</h1>
    )
   }
}
