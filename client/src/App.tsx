import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Details
  from './components/Details/Details';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard filter={null}/>} />
        <Route path='/hiking-trails' element={<Dashboard filter={'hiking-trails'} />} />
        <Route path='/seasides' element={<Dashboard filter={'seasides'} />} />
        <Route path='/parks' element={<Dashboard filter={'parks'} />} />
        <Route path='/destination/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
