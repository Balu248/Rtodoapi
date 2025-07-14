import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewtodo from './components/Viewtodo';
import Deletetodo from './components/Deletetodo';
import Searchtodo from './components/Searchtodo';
import Addtodo from './components/Addtodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addtodo/>}/>
      <Route path='/s' element={<Searchtodo/>}/>
      <Route path='/d' element={<Deletetodo/>}/>
      <Route path='/v' element={<Viewtodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
