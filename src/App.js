
import './App.css';
import NavbarComponent from './Components/navbar/navbar.js';
import BodyComponent from './pages/home/home.js';
import BookDetails from './pages/bookDetails/bookDetails.js'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { BookContextProvidder } from './Contexts/bookcontext.js';
import SignUp from './pages/SignUp/signup.js';
import Login from './pages/login/login.js';
function App() {
  return (
    <div className="App">
          <BookContextProvidder>
              <BrowserRouter>
                <Routes>
                <Route path="/" element={<><NavbarComponent/> <BodyComponent/> </>} />
                <Route path="/details" element={<> <NavbarComponent/> <BookDetails/> </>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<Login/>} />    
                </Routes>
              </BrowserRouter>
          </BookContextProvidder>
        
      
    </div>
  );
}

export default App;
