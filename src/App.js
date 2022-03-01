// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// PAGES
import Home from './Pages/Home';


// COMPONENTS
import NavBar from './Components/NavBar';
import Transactions from './Components/Transactions';
import TransactionDetails from './Components/TransactionDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route exact path='/transactions/:index' element={<TransactionDetails />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
