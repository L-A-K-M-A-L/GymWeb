import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
// @ts-ignore
import Login from './pages/Login';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

const App = () => {
  return (
    <Router>  
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default App;
