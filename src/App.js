import { Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery';
import Homepage from './components/Homepage';
import Navbar from './components/static/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
    </>
  );
}

export default App;
