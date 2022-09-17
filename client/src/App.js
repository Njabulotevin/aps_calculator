import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Calculator from './components/Calculator';
import Restults from './components/Restults';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/calculator' element={ <Calculator/>}/>
        <Route path='/results' element={ <Restults/>}/>
     </Routes>
    </div>
  );
}

export default App;
