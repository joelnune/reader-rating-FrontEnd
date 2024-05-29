import React from "react";
import { useLocation } from "react-router-dom";
import './bookDetails.css'
function BookDetails(props)  {
const location = useLocation()
const bookInfo = location.state.volumeInfo
const date = new Date(bookInfo.publishedDate);
console.log(location.state)
return (
  <div className="details-container">
    <img src={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} className='book-img' />
    <div className="book-content">
    <h2>{bookInfo.title}</h2>
    <h4>{bookInfo.authors ? bookInfo.authors.toString() : "SEM INFORMAÇÕES"}</h4>
    <p>{bookInfo.description}</p>
    <div className="info">
      <p>Número de páginas: {bookInfo.pageCount}</p>
      <p>Data de publicação: {date.toLocaleDateString()}</p>
      <p>Idioma: {bookInfo.language.toUpperCase()}</p>
    </div>
    </div>

  </div>
)
}

export default BookDetails

