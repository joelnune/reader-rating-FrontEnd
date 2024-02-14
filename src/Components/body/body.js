import React, { useContext } from 'react';
import { BookContext } from '../../Contexts/bookcontext';
import Card from '../../Components/card/card'

export default function BodyComponent(props) {
  const { books } = useContext(BookContext)


  console.log(books);

  return (
    <>
      <div>
        {
          books.length > 0 && books.map((books) => <Card book={books} />)
        }
      </div >
    </>
  );

}

