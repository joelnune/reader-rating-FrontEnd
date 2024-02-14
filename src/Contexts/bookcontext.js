import React, { createContext, useState } from "react";


export const BookContext = createContext()

export const BookContextProvidder = ({ children }) => {
  const [books, setBooks] = useState([])

  return (
    <BookContext.Provider value={{ books, setBooks }}>{children}</BookContext.Provider>
  )
}