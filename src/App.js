// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// PAGES
import Home from './Pages/Home';
import NewTransaction from './Pages/NewTransaction';
import EditTransaction from './Pages/EditTransaction';


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
            <Route path='/transactions/new' element={<NewTransaction />} />
            <Route path='/transactions/:index/edit' element={<EditTransaction />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
