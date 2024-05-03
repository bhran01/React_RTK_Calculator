import Calculator from './Pages/Calculator'
import Home from './Pages/Home'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/calculator' element={<Calculator/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
