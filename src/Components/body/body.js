import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
function BodyComponent(props) {

    console.log(props.totalItems)
    
    return (
        
      <>
       <body>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.totalItems}</Card.Title>
        <Card.Text>
        {props.totalItems}
    
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </body> 
      </>
    );


  }
  
  export default BodyComponent;