// import logo from './logo.svg';
import './App.css';
import Aboutus from './Components/Aboutus';
import Home from './Components/Home';
import Nav from './Components/Nav';
import './Components/Home.css';
import './Components/Aboutus.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav/>
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home/>}> </Route> */}
        <Route path='/aboutus' element={<Aboutus/>}></Route>
      </Routes>
    </Router>
    <Home/>
  
    </>
     );
    }
    
    export default App;
    

    