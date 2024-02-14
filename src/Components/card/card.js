import React from 'react'
import { Card } from 'react-bootstrap'

export default function card({ book }) {
  console.log(book);
  if (book.volumeInfo)
    return (
      <div>
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{book.volumeInfo.title}</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card></div>
    )
}
