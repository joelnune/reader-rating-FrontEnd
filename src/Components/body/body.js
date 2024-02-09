import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useState } from 'react';
function BodyComponent(props) {

//const [livro,setLivro] = useState(props)

//useEffect(()=>{console.log(livro)},[livro])

    if(props.items)
    return (
      <>
       <body>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.items[0].kind}</Card.Title>
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