
import './App.css';
import NavbarComponent from './Components/navbar/navbar.js';
import BodyComponent from './pages/home/home.js';
import BookDetails from './pages/bookDetails/bookDetails.js'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { BookContextProvidder } from './Contexts/bookcontext.js';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <BookContextProvidder>
              <BrowserRouter>
                <Routes>
                <Route path="/" element={<><NavbarComponent/> <BodyComponent/> </>} />
                <Route path="/details" element={<BookDetails/>} />
                </Routes>
              </BrowserRouter>
          </BookContextProvidder>
         </header>
      
    </div>
  );
}

export default App;
