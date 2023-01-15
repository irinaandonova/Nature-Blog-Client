import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './pages/Header/Header';
import Details from './pages/Details/Details';
import CreateDestination from './pages/CreateDestination/CreateDestination';
import "./App.css";
import EditDestination from './pages/EditDestination/EditDestination';
import { AuthContext } from './auth/authContext';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/:destinationType' element={<Dashboard />} />
        <Route path='/destination/:id' element={<Details />} />
        <Route path='/destination/create' element={<CreateDestination />} />
        <Route path='/destination/:id/edit' element={<EditDestination />} />
      </Routes>
    </div>
  );
}

export default App;
