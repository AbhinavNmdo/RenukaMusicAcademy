import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/static/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    </>
  );
}

export default App;
