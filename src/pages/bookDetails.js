import React from "react";
import { useLocation } from "react-router-dom";

function BookDetails(props)  {
const location = useLocation()
console.log(location.state)
return (
  <div className="details">
 <p>detalhes: {location.state.volumeInfo.description}</p>
  </div>
)
}

export default BookDetails

