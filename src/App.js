import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attendance from './Components/Attendance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/table' element={<Attendance/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
