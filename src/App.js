// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// PAGES
import Home from './Pages/Home';

// COMPONENTS
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
