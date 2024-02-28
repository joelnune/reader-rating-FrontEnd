import React, { useContext } from 'react';
import { BookContext } from '../../Contexts/bookcontext';
import Card from '../../Components/card/card'
import './body.css'
export default function BodyComponent(props) {
  const { books } = useContext(BookContext)


  console.log(books);
if(!books)
return (

  <h1> Sem Resultados :/ </h1>
)
  return (
    <>
      <div className='container-body'>
        {
          books.length > 0 && books.map((books) => <Card book={books} />)
        }
      </div >
    </>
  );

}

