import React from "react";
import { useLocation } from "react-router-dom";
import './bookDetails.css'
import Form from 'react-bootstrap/Form';
import StarRating from "../../Components/stars/stars";

function BookDetails(props)  {
const location = useLocation()
const bookInfo = location.state.volumeInfo
const date = new Date(bookInfo.publishedDate);
console.log(location.state)
return (
  <div className="main">
  <div className="details-container">
    <img src={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} className='book-img' />
    <div className="book-content">
      <h2>{bookInfo.title}</h2>
      <h4>{bookInfo.authors ? bookInfo.authors.toString() : "SEM INFORMAÇÕES"}</h4>
      <p>{bookInfo.description}</p>
        <div className="info">
          <p> <strong> Número de páginas: </strong>{bookInfo.pageCount}</p>
          <p><strong> Data de publicação:</strong> {date.toLocaleDateString()}</p>
          <p><strong> Idioma:</strong> {bookInfo.language.toUpperCase()}</p>
        </div>
    </div>
  </div>
  <div className="comment-container">
    <StarRating> </StarRating>
    <Form.Control placeholder="comment here..." as="textarea" htmlSize={4}rows={4} />
  </div>
  </div>

)
}
/* FAZER PARTE DE "MAIS DE FRIEDERICH NIETZCHE" */
export default BookDetails

