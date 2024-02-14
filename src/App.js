
import './App.css';
import NavbarComponent from './Components/navbar/navbar.js';
import BodyComponent from './Components/body/body.js';
import { BookContextProvidder } from './Contexts/bookcontext.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookContextProvidder>
          <NavbarComponent />
          <BodyComponent />
        </BookContextProvidder>
      </header>
    </div>
  );
}

export default App;
